import React from 'react';
import FacebookIcon from '@/assets/images/facebook-icon.png';
import MetaText from '@/assets/images/meta-text.png';
import '@/assets/styles.css';

const MobileVersion: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FFFAF2] via-[#FDF3F7] to-[#EEFCF3] font-['Optimistic_Text_Normal']">
      <div className="flex justify-center p-4">
        <button className="text-sm leading-[19px] text-[#465A69] hover:underline">
          English (UK)
        </button>
      </div>

      <div className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center">
        <div className="mb-12 flex justify-center">
          <img src={FacebookIcon} alt="Facebook" className="max-h-[60px] w-auto" />
        </div>

        <div className="w-full px-4">
          <form className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="text"
                id="email"
                required
                placeholder=" "
                className="peer h-[56px] w-full rounded-[12px] border border-[#CBD2D9] bg-white p-[10px] pt-[24px] text-[14px] focus:border-[#1877f2] focus:outline-none"
              />
              <label
                htmlFor="email"
                className="absolute top-[18px] left-[10px] text-[14px] text-[#65676B] transition-transform peer-focus:translate-y-[-12px] peer-focus:text-[12px] peer-focus:text-[#1877f2] peer-[:not(:placeholder-shown)]:translate-y-[-12px] peer-[:not(:placeholder-shown)]:text-[12px]"
              >
                Mobile number or email address
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                required
                placeholder=" "
                className="peer h-[56px] w-full rounded-[12px] border border-[#CBD2D9] bg-white p-[10px] pt-[24px] text-[14px] focus:border-[#1877f2] focus:outline-none"
              />
              <label
                htmlFor="password"
                className="absolute top-[18px] left-[10px] text-[14px] text-[#65676B] transition-transform peer-focus:translate-y-[-12px] peer-focus:text-[12px] peer-focus:text-[#1877f2] peer-[:not(:placeholder-shown)]:translate-y-[-12px] peer-[:not(:placeholder-shown)]:text-[12px]"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="mt-1 h-[44px] w-full cursor-pointer rounded-[22px] bg-[#0064E0] px-5 font-['Optimistic_Text_Bold'] text-[14px] text-white"
            >
              Log In
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-[14px] leading-[20px] font-medium text-[#1C2B33]">
              Forgotten Password?
            </a>
          </div>
        </div>
      </div>

      <div className="fixed right-0 bottom-4 left-0 flex flex-col items-center gap-4">
        <img src={MetaText} alt="Meta" className="h-[12px] w-[60px]" />
        <div className="flex gap-2 text-[10px] text-[#63788A]">
          <a href="#" className="hover:underline">
            About
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            Help
          </a>
          <span>·</span>
          <a href="#" className="hover:underline">
            More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
