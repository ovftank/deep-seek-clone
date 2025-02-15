import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';

const FixedContact: React.FC = () => {
  return (
    <a
      href="https://t.me/beerick94"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 hover:bg-gray-800"
      title="Contact us on Telegram"
    >
      <FontAwesomeIcon icon={faTelegram} size="2x" />
    </a>
  );
};

export default FixedContact;
