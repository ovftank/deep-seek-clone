import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWeixin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface SocialLink {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      title: 'Email',
      href: 'mailto:service@deepseek.com',
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
    {
      title: 'WeChat',
      href: '#',
      icon: <FontAwesomeIcon icon={faWeixin} />,
    },
    {
      title: 'GitHub',
      href: 'https://github.com/deepseek-ai',
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      title: 'X (Twitter)',
      href: 'https://twitter.com/deepseek_ai',
      icon: <FontAwesomeIcon icon={faXTwitter} />,
    },
  ];

  return (
    <div className="flex items-center">
      {socialLinks.map(link => (
        <a
          key={link.title}
          href={link.href}
          title={link.title}
          className="text-black transition-colors duration-200 last:ml-0 hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mx-3 text-2xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
};
