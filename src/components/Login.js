import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '123' && password === 'aaa') {
      navigate('/index');
    } else {
      alert('Username atau password salah!');
    }
  };

  return (
    <div className="login-container">
      <div className="animated-background">
        {Array.from({ length: 400 }).map((_, index) => (
          <div key={index} className="grid-box"></div>
        ))}
      </div>
      <div className="login-box">
        <div className="login-header">
          <h2>Selamat Datang</h2>
          <p>Silakan masuk ke akun Anda</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
