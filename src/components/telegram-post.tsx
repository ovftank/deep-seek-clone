import React from 'react';

interface TelegramPostProps {
  postUrl: string;
}

const TelegramPost: React.FC<TelegramPostProps> = ({ postUrl }) => {
  const getEmbedUrl = (url: string) => {
    const regex = /t\.me\/([^/]+)\/(\d+)/;
    const match = regex.exec(url);
    if (!match) return '';

    const [, channel, postId] = match;
    return `https://t.me/${channel}/${postId}?embed=1`;
  };

  const embedUrl = getEmbedUrl(postUrl);
  if (!embedUrl) return null;

  return (
    <div className="w-full">
      <iframe
        src={embedUrl}
        className="min-h-[731.580px] w-full border-0"
        title="Telegram post embed"
      />
    </div>
  );
};

export default TelegramPost;
