import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, HomeIcon, VideoIcon, DatabaseIcon, BarChartIcon, FileTextIcon, HeartIcon } from 'lucide-react';
export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: 'Home',
    path: '/',
    icon: <HomeIcon size={20} />
  }, {
    name: 'Telehealth',
    path: '/telehealth',
    icon: <VideoIcon size={20} />
  }, {
    name: 'Data Management',
    path: '/data-management',
    icon: <DatabaseIcon size={20} />
  }, {
    name: 'Analytics',
    path: '/analytics',
    icon: <BarChartIcon size={20} />
  }, {
    name: 'Health Records',
    path: '/health-records',
    icon: <FileTextIcon size={20} />
  }, {
    name: 'Wellness',
    path: '/wellness',
    icon: <HeartIcon size={20} />
  }];
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">
                HealthHub
              </span>
            </Link>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${location.pathname === item.path ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                <span className="mr-1">{item.icon}</span>
                {item.name}
              </Link>)}
          </nav>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${location.pathname === item.path ? 'bg-blue-50 border-blue-500 text-blue-700' : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'}`} onClick={() => setIsMenuOpen(false)}>
                <span className="inline-flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </span>
              </Link>)}
          </div>
        </div>}
    </header>;
};