// components/Login.tsx
import React, { useState } from 'react';

interface LoginProps {
  onLogin: (nickname: string, data: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [nickname, setNickname] = useState('');

  const handleLogin = async () => {
    if (!nickname.trim()) return;
    try {
      const res = await fetch(`/user/${nickname}`);
      const data = await res.json();
      onLogin(nickname, data);
    } catch (err) {
      console.error('Ошибка получения данных:', err);
    }
  };

  return (
    <div className="login-container flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        placeholder="Введите ваш ник"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <button onClick={handleLogin} className="px-4 py-2 bg-green-600 text-white rounded">
        Войти
      </button>
    </div>
  );
};

export default Login;
