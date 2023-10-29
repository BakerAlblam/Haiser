import { Mail, Phone } from 'lucide-react';
import React from 'react';

const Menu = () => {
  return (
    <div>
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-center">
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex">
              <div className="flex space-x-4 items-center">
                <a href="mailto:autoeaseverkhauf@outlook.com" className="text-white flex items-center">
                  <Mail className="w-5 h-5 mr-2" /> Autoeaseverkhauf@outlook.com
                </a>
                <div className="text-white flex items-center">
                  <Phone className="w-5 h-5 mr-2" /> +41 78 880 33 94
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
};

export default Menu;
