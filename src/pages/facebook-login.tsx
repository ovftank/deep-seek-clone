import React, { useEffect, useState } from 'react';
import DesktopVersion from '../components/facebook-login/desktop-version';
import MobileVersion from '../components/facebook-login/mobile-version';

const FacebookLogin: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'android',
        'webos',
        'iphone',
        'ipad',
        'ipod',
        'blackberry',
        'windows phone',
      ];
      return mobileKeywords.some(keyword => userAgent.includes(keyword));
    };

    setIsMobile(checkMobile());
  }, []);

  return <>{isMobile ? <MobileVersion /> : <DesktopVersion />}</>;
};

export default FacebookLogin;
