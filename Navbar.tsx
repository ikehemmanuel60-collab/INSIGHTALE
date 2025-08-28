import React from 'react';
import { Link } from 'react-router-dom';
import { Search, LogIn, Rocket, User, LogOut } from 'lucide-react';

interface NavbarProps {
  user: any;
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onSearchClick: () => void;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  user,
  onLoginClick,
  onRegisterClick,
  onSearchClick,
  onLogout
}) => {
  return (
    <nav className="bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              INSIGHTALE
            </span>
          </Link>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onSearchClick}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 hover:scale-110"
              title="Search Stories"
            >
              <Search className="w-5 h-5 text-white" />
            </button>

            {user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <User className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-full bg-red-500 hover:bg-red-600 transition-all duration-200 hover:scale-110"
                  title="Logout"
                >
                  <LogOut className="w-5 h-5 text-white" />
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onLoginClick}
                  className="p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                  title="Log In"
                >
                  <LogIn className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={onRegisterClick}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;