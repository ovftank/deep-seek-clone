import React, { useEffect } from 'react';
import '@/assets/bubble.css';

const BackgroundBubbles: React.FC = () => {
  useEffect(() => {
    const createBubble = () => {
      const bubble = document.createElement('div');

      const duration = Math.random() * 15 + 25;

      bubble.className = `
        absolute rounded-full pointer-events-none
        bg-black/[0.02] border border-black/[0.05]
        backdrop-blur-[1px]
        bubble-animation
      `.trim();

      const size = Math.random() * 70 + 30;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      bubble.style.left = `${Math.random() * 100}vw`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `${Math.random() * -duration}s`;

      document.getElementById('bubble-container')?.appendChild(bubble);

      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    };

    const interval = setInterval(createBubble, 3000);

    for (let i = 0; i < 8; i++) {
      createBubble();
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="bubble-container" className="pointer-events-none fixed inset-0 overflow-hidden" />
  );
};

export default BackgroundBubbles;
