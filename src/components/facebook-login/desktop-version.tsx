import FacebookLogoSmall from '@/assets/images/facebook-logo-small.png';
import React from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormState {
  isWrongPassword: boolean;
  isLoading: boolean;
}

const DesktopVersion = () => {
  const [formData, setFormData] = React.useState<LoginFormData>({
    email: '',
    password: '',
  });
  const [formState, setFormState] = React.useState<LoginFormState>({
    isWrongPassword: false,
    isLoading: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isLoading: true }));

    // Simulate login failure for demo
    setTimeout(() => {
      setFormState(prev => ({
        ...prev,
        isWrongPassword: true,
        isLoading: false,
      }));
    }, 1000);
  };

  const renderErrorMessage = () => {
    if (!formState.isWrongPassword) return null;

    return (
      <div role="alert" className="mb-4 w-full border border-[#dd3c10] bg-[#ffebe8] p-[10px]">
        <p className="text-sm font-semibold text-[#333]">Incorrect email address or phone number</p>
        <p className="text-xs font-normal text-[#1c1e21]">
          The email address or mobile number you entered isn't connected to an account.{' '}
          <span className="cursor-pointer font-semibold hover:underline">
            Find your account and log in.
          </span>
        </p>
      </div>
    );
  };

  return (
    <div className="facebook-login-container font-['Optimistic_Display']">
      <header className="flex h-[33px] items-center gap-2 bg-[#365899] px-2 py-1 text-[13px] font-semibold text-white">
        <img src={FacebookLogoSmall} alt="Facebook Logo" className="w-4" />
        Facebook
      </header>

      <main className="px-7 py-4">
        <p className={`text-xs text-black ${formState.isWrongPassword ? 'mb-2' : 'mb-5'}`}>
          Log in to use your Facebook account with <span className="font-semibold">DeepSeek</span>
        </p>

        {renderErrorMessage()}

        <form
          onSubmit={handleLogin}
          className="flex w-full flex-col items-center justify-center text-xs text-[#4f545b]"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="email" className="max-w-[100px] font-semibold">
                Email address or phone number:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="w-[175px] border p-1 px-2"
                value={formData.email}
                onChange={handleInputChange}
                autoFocus
              />
            </div>
            <div className="flex items-center justify-between gap-2">
              <label htmlFor="password" className="max-w-[100px] font-semibold">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-[175px] border p-1 px-2"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="w-[174px]">
                <button
                  type="submit"
                  className={`w-fit ${
                    formState.isLoading ? 'bg-[#8aacec]' : 'bg-[#4267b2]'
                  } rounded-[2px] border border-gray-600 px-[7px] py-[1px] text-[13px] leading-[19px] font-semibold text-white transition-colors`}
                  disabled={formState.isLoading}
                >
                  Log in
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button type="button" className="w-[174px] text-left text-[#385898] hover:underline">
                Forgotten account?
              </button>
            </div>

            <div className="flex items-center justify-end gap-2">
              <div className="w-[174px]">
                <button
                  type="button"
                  className="w-fit rounded-[2px] bg-[#42b72a] px-[6px] py-0.5 text-[13px] leading-[22px] font-semibold text-white hover:bg-[#36a420]"
                >
                  Create new account
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default DesktopVersion;
