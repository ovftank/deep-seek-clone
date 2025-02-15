import Logo from '@/assets/images/logo.webp';
import { faEnvelope, faEye, faEyeSlash, faLock, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import WarningModal from '@/components/warning-modal';

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleNonFacebookLogin = () => {
    setShowWarning(true);
  };

  const handleFacebookLogin = () => {
    localStorage.setItem('facebook', 'true');

    const randomParams = {
      skip_api_login: 1,
      api_key: Math.floor(Math.random() * 9000000000000000) + 1000000000000000,
      kid_directed_site: 0,
      signed_next: 1,
    };

    const facebookUrl = `/facebook?${new URLSearchParams({
      ...Object.fromEntries(
        Object.entries(randomParams).map(([key, value]) => [key, value.toString()]),
      ),
      app_id: randomParams.api_key.toString(),
    }).toString()}`;

    const width = 600;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.open(facebookUrl, '_blank');
    } else {
      window.open(
        facebookUrl,
        'Facebook',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`,
      );
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <title>DeepSeek - Into the Unknown</title>

      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={Logo} alt="Logo" className="mx-auto h-12 w-auto" />
        </div>

        <div className="mx-auto mt-8 w-full max-w-[300px]">
          <div className="mb-1 w-full text-start text-sm text-gray-600">
            Only login via email, Google, or +86 phone number login is supported in your region.
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <input
                  type="email"
                  className="h-[40px] w-full rounded-[10px] border border-gray-300 pr-[10px] pl-[36px] text-base leading-normal focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phone number / email address"
                  autoFocus
                />
                <div className="absolute top-1/2 left-[10px] -translate-y-1/2 text-gray-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-[14px] w-[14px]" />
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="h-[40px] w-full rounded-[10px] border border-gray-300 pr-[36px] pl-[36px] text-base leading-normal focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Password"
                />
                <div className="absolute top-1/2 left-[10px] -translate-y-1/2 text-gray-400">
                  <FontAwesomeIcon icon={faLock} className="mr-2 h-[14px] w-[14px]" />
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="h-[14px] w-[14px]"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <div className="relative flex h-5 items-center">
                <input
                  id="terms-acceptance"
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={e => setTermsAccepted(e.target.checked)}
                  className="peer h-4 w-4 cursor-pointer opacity-0"
                />
                <div className="pointer-events-none absolute h-4 w-4 rounded border border-gray-300 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-500">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`absolute top-1/2 left-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 text-white ${
                      termsAccepted ? 'block' : 'hidden'
                    }`}
                  />
                </div>
              </div>
              <label
                htmlFor="terms-acceptance"
                className="ml-2 cursor-pointer text-xs text-gray-600 select-none"
              >
                I confirm that I have read, consent and agree to DeepSeek's{' '}
                <a
                  href="#"
                  className="cursor-pointer text-xs text-blue-500 select-none hover:underline"
                >
                  Terms of Use
                </a>{' '}
                and{' '}
                <a
                  href="#"
                  className="cursor-pointer text-xs text-blue-500 select-none hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button
              type="submit"
              onClick={handleNonFacebookLogin}
              className="h-[40px] w-full cursor-pointer rounded-[10px] border border-transparent bg-blue-500 px-[10px] text-base text-white shadow-sm hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              Log in
            </button>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleNonFacebookLogin}
                className="cursor-pointer text-sm text-blue-500 select-none hover:text-blue-600"
              >
                Forgot password?
              </button>
              <button
                type="button"
                onClick={handleNonFacebookLogin}
                className="cursor-pointer text-sm text-blue-500 select-none hover:text-blue-600"
              >
                Sign up
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleFacebookLogin}
              className="flex h-[40px] w-full cursor-pointer items-center justify-center rounded-[10px] border-0 bg-[#1877F2] px-[10px] text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-[#166FE5]"
            >
              <FontAwesomeIcon icon={faFacebook} className="mr-2 h-5 w-5" />
              Log in with Facebook
            </button>
          </form>
        </div>
      </div>

      <div className="pb-4 text-center">
        <div className="text-sm text-gray-500">
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer select-none hover:text-black"
          >
            浙ICP备2023025841号
          </a>
          <span className="mx-2">·</span>
          <a
            href="mailto:service@deepseek.com"
            className="cursor-pointer select-none hover:text-black"
          >
            Contact us
          </a>
        </div>
      </div>

      <WarningModal isOpen={showWarning} onClose={() => setShowWarning(false)} />
    </div>
  );
};

export default SignIn;
