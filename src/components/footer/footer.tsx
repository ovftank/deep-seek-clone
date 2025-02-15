import React from 'react';
import { SocialLinks } from './social-links';
import { FooterColumn } from './footer-column';
import Logo from '@/assets/images/logo.webp';
interface FooterLink {
  title: string;
  href: string;
  isExternal?: boolean;
}

const researchLinks: FooterLink[] = [
  { title: 'DeepSeek R1', href: 'https://github.com/deepseek-ai/DeepSeek-R1', isExternal: true },
  { title: 'DeepSeek V3', href: 'https://github.com/deepseek-ai/DeepSeek-V3', isExternal: true },
  {
    title: 'DeepSeek Coder V2',
    href: 'https://github.com/deepseek-ai/DeepSeek-Coder-V2',
    isExternal: true,
  },
  { title: 'DeepSeek VL', href: 'https://github.com/deepseek-ai/DeepSeek-VL', isExternal: true },
  { title: 'DeepSeek V2', href: 'https://github.com/deepseek-ai/DeepSeek-V2', isExternal: true },
  {
    title: 'DeepSeek Coder',
    href: 'https://github.com/deepseek-ai/DeepSeek-Coder',
    isExternal: true,
  },
  {
    title: 'DeepSeek Math',
    href: 'https://github.com/deepseek-ai/DeepSeek-Math',
    isExternal: true,
  },
  { title: 'DeepSeek LLM', href: 'https://github.com/deepseek-ai/DeepSeek-LLM', isExternal: true },
];

const productLinks: FooterLink[] = [
  { title: 'DeepSeek App', href: 'https://download.deepseek.com/app/', isExternal: true },
  { title: 'DeepSeek Chat', href: 'https://chat.deepseek.com', isExternal: true },
  { title: 'DeepSeek Platform', href: 'https://platform.deepseek.com', isExternal: true },
  { title: 'API Pricing', href: 'https://platform.deepseek.com/pricing', isExternal: true },
  { title: 'Service Status', href: 'https://status.deepseek.com', isExternal: true },
];

const legalLinks: FooterLink[] = [
  {
    title: 'Privacy Policy',
    href: 'https://cdn.deepseek.com/policies/en-US/deepseek-privacy-policy.html',
    isExternal: true,
  },
  {
    title: 'Terms of Use',
    href: 'https://cdn.deepseek.com/policies/en-US/deepseek-terms-of-use.html',
    isExternal: true,
  },
  {
    title: 'Report Vulnerabilities',
    href: 'https://security.deepseek.com',
    isExternal: true,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 px-8 pt-16">
      <div className="mx-auto mb-16 grid max-w-6xl grid-cols-1 gap-10 text-[15px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div className="order-last col-span-1 flex flex-col items-start gap-2 sm:col-span-2 xl:order-first">
          <img
            src={Logo}
            alt="DeepSeek Logo"
            width={780}
            height={165}
            loading="lazy"
            decoding="async"
            className="mt-1 mb-6 max-w-40"
          />
          <SocialLinks />
          <div className="flex flex-col items-start gap-3">
            <div className="mt-6 text-sm text-slate-400">
              © {new Date().getFullYear()} DeepSeek. All rights reserved.
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-slate-600"
              >
                浙ICP备2023025841号
              </a>
              <a
                href="http://www.beian.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-slate-600"
              >
                浙公网安备 33010502011812 号
              </a>
            </div>
          </div>
        </div>

        <FooterColumn title="Research" links={researchLinks} />
        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Legal & Safety" links={legalLinks} />

        <FooterColumn
          title="Join Us"
          links={[
            {
              title: 'Job Description',
              href: 'https://app.mokahr.com/social-recruitment/high-flyer/140576',
              isExternal: true,
            },
          ]}
        />
      </div>
    </footer>
  );
};

export default Footer;
