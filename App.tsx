import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import SearchOverlay from './components/SearchOverlay';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setIsLoginOpen(false);
  };

  const handleRegister = (userData: any) => {
    setUser(userData);
    setIsRegisterOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
        <Navbar
          user={user}
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          onLogout={handleLogout}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/story/:storyId" element={<StoryPage />} />
        </Routes>

        {isLoginOpen && (
          <LoginModal
            onClose={() => setIsLoginOpen(false)}
            onLogin={handleLogin}
          />
        )}

        {isRegisterOpen && (
          <RegisterModal
            onClose={() => setIsRegisterOpen(false)}
            onRegister={handleRegister}
          />
        )}

        {isSearchOpen && (
          <SearchOverlay onClose={() => setIsSearchOpen(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;