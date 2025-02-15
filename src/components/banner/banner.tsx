import React from 'react';
import BannerCard from '@/components/banner/banner-card';
import Logo from '@/assets/images/logo.webp';
import LogoCenter from '@/assets/images/logo-center.svg';
import BannerBackground from '@/assets/images/banner-background.webp';
const linkDownloadDeepSeekApp = '/download';

const Banner: React.FC = () => {
  return (
    <div
      className="w-full bg-cover bg-center px-8"
      style={{ backgroundImage: `url(${BannerBackground})` }}
    >
      <div className="flex w-full flex-col items-center pt-24 pb-20 md:pt-32 md:pb-40">
        <img
          src={Logo}
          alt="Logo"
          className="absolute top-4 left-4 max-w-28"
          width={780}
          height={165}
          loading="lazy"
        />

        <div className="mb-12 text-center text-sm text-slate-400 md:mb-16">
          <a href="https://api-docs.deepseek.com/news/news250120" target="_blank" className="block">
            🎉 DeepSeek-R1 is now live and open source, rivaling OpenAI's Model o1. Available on
            web, app, and API. Click for details.
          </a>
        </div>

        <img src={LogoCenter} alt="Center Logo" className="mb-6 max-w-xs" />

        <div className="mb-12 text-center text-3xl font-bold text-slate-600 md:mb-16">
          Into the unknown
        </div>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-8 md:grid-cols-2">
          <BannerCard
            title="Start Now"
            description={['Free access to DeepSeek-V3.', 'Experience the intelligent model.']}
            href={linkDownloadDeepSeekApp}
          />
          <BannerCard
            title="Get DeepSeek App"
            description={['Chat on the go with DeepSeek-V3', 'Your free all-in-one AI tool']}
            href="/sign-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
