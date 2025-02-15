import React from 'react';

interface BannerCardProps {
  title: string;
  description: string[];
  href?: string;
}

const BannerCard: React.FC<BannerCardProps> = ({ title, description, href }) => {
  const cardContent = (
    <>
      <div className="mb-2 text-xl font-bold text-blue-500">{title}</div>
      <div className="text-slate-500" style={{ fontSize: '15px' }}>
        {description.map(line => (
          <React.Fragment key={`desc-${line}`}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className="absolute text-black"></div>
    </>
  );

  const commonClasses =
    'relative rounded-2xl pt-6 pb-7 px-8 min-w-0 flex-1 bg-white/50 backdrop-blur-sm';
  const commonStyle = {
    boxShadow: '0 0 0 1px #f1f5f9, 0 2px 4px rgba(0, 0, 0, .05), 0 12px 24px rgba(0, 0, 0, .05)',
  };

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${commonClasses} cursor-pointer`}
        style={commonStyle}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={`${commonClasses} cursor-default`} style={commonStyle}>
      {cardContent}
    </div>
  );
};

export default BannerCard;
