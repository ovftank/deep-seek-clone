import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { TypeAnimation } from 'react-type-animation';
import toast from 'react-hot-toast';
import '@/assets/animations.css';
const Login: React.FC = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const shakeInput = (element: HTMLElement) => {
    element.classList.add('animate-shake');
    setTimeout(() => {
      element.classList.remove('animate-shake');
    }, 500);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!credentials.username.trim()) {
      toast.error('Vui lòng nhập tên đăng nhập');
      if (usernameRef.current) {
        shakeInput(usernameRef.current);
        usernameRef.current.focus();
      }
      return;
    }

    if (!credentials.password.trim()) {
      toast.error('Vui lòng nhập mật khẩu');
      if (passwordRef.current) {
        shakeInput(passwordRef.current);
        passwordRef.current.focus();
      }
      return;
    }

    if (credentials.username === 'admin' && credentials.password === 'admin') {
      toast.success('Đăng nhập thành công');
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin');
    } else {
      toast.error('Tên đăng nhập hoặc mật khẩu không đúng');
      if (usernameRef.current && passwordRef.current) {
        shakeInput(usernameRef.current);
        shakeInput(passwordRef.current);
        usernameRef.current.focus();
      }
    }
  };

  return (
    <div className="min-h-screen w-full">
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <TypeAnimation
              sequence={['Trang Quản Trị', 1000]}
              wrapper="h1"
              speed={50}
              className="text-3xl font-bold text-black"
              repeat={0}
            />
            <p className="mt-2 text-sm text-gray-600">Vui lòng đăng nhập để tiếp tục</p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Tên đăng nhập
                  </label>
                  <div className="group mt-1">
                    <input
                      ref={usernameRef}
                      id="username"
                      type="text"
                      autoFocus
                      className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-black shadow-sm transition-all duration-300 group-hover:shadow-sm placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      value={credentials.username}
                      onChange={e =>
                        setCredentials(prev => ({ ...prev, username: e.target.value }))
                      }
                      placeholder="Nhập tên đăng nhập"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Mật khẩu
                  </label>
                  <div className="group mt-1">
                    <input
                      ref={passwordRef}
                      id="password"
                      type="password"
                      className="block w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-black shadow-sm transition-all duration-300 group-hover:shadow-sm placeholder:text-gray-400 hover:border-gray-300 focus:border-black focus:bg-white focus:ring-1 focus:ring-black focus:outline-none"
                      value={credentials.password}
                      onChange={e =>
                        setCredentials(prev => ({ ...prev, password: e.target.value }))
                      }
                      placeholder="Nhập mật khẩu"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-black px-6 py-4 text-base font-semibold text-white transition-all duration-300 hover:shadow-lg active:shadow-none"
              >
                <span className="relative z-10">Đăng nhập</span>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
