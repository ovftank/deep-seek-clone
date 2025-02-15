import React from 'react';
import Banner from '@/components/banner/banner';
import CapabilitiesSection from '@/components/capabilities/capabilities-section';
import Footer from '@/components/footer/footer';

const Home: React.FC = () => {
  return (
    <>
      <meta
        name="description"
        content="DeepSeek, unravel the mystery of AGI with curiosity. Answer the essential question with long-termism."
      />
      <meta
        name="keywords"
        content="DeepSeek, AGI, LLM, DeepSeek Coder, DeepSeek Chat, DeepSeek Platform, DeepSeek API"
      />
      <meta name="google" content="notranslate" />

      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="DeepSeek, unravel the mystery of AGI with curiosity. Answer the essential question with long-termism."
      />
      <meta property="og:image" content="https://chat.deepseek.com/deepseek-chat.jpeg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="DeepSeek, unravel the mystery of AGI with curiosity. Answer the essential question with long-termism."
      />
      <meta name="twitter:image" content="https://chat.deepseek.com/deepseek-chat.jpeg" />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <nav className="absolute top-4 right-6 flex gap-6" aria-label="Secondary navigation">
          <div className="flex border-b border-black">
            <a
              href="https://platform.deepseek.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm font-semibold text-black transition-opacity hover:opacity-80"
              aria-label="API Platform"
            >
              API Platform ↗
            </a>
          </div>
          <a
            href="/zh"
            className="cursor-pointer text-sm text-slate-400 transition-colors hover:text-slate-600"
            lang="zh"
            hrefLang="zh"
          >
            中文
          </a>
        </nav>

        <Banner />
        <CapabilitiesSection />
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
