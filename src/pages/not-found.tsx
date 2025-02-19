import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

export default NotFound;
