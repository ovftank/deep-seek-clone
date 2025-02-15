import React from 'react';

interface FooterLink {
  title: string;
  href: string;
  isExternal?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div className="col-span-1 flex flex-col items-start gap-1 text-slate-600">
      <div className="mb-1 font-bold text-slate-700">{title}</div>
      {links.map(link => (
        <a
          key={link.title}
          href={link.href}
          target={link.isExternal ? '_blank' : undefined}
          rel={link.isExternal ? 'noopener noreferrer' : undefined}
          className="transition-colors duration-200 hover:text-slate-900"
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
