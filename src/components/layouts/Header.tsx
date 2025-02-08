"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Search, MoreVertical } from 'lucide-react';
import Logo from '../../public/assets/logo_néo.png';
import UserModal from '../widgets/UserModal';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <header className="flex flex-col p-4 bg-white shadow-md mobile-content">
      {/* Premier bloc : Logo et Icônes */}
      <div className="flex justify-between items-center mt-4">
        <div className="logo">
          <Image src={Logo} alt="Logo" width={55} height={21} />
        </div>
        <div className="flex space-x-4 text-gray-600">
          <Search className="w-5 h-5 cursor-pointer" />
          <MoreVertical className="w-5 h-5 cursor-pointer" onClick={toggleModal} />
        </div>
      </div>

      {/* Deuxième bloc : Navigation */}
      <nav className="flex justify-between mt-4 mx-3">
        {[
          { name: 'CHATS', href: '/chats', badge: 4 },
          { name: 'STATUS', href: '/status' },
          { name: 'KELPRIX', href: '/kelprix' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`text-gray-600 hover:text-gray-800 relative ${
              pathname === item.href ? 'font-bold text-gray-900' : ''
            }`}
          >
            <span className="flex items-center">
              {item.name}
              {item.badge && (
                <span className="badge bg-green-600 text-white text-xs rounded-full ml-1 px-1">
                  {item.badge}
                </span>
              )}
            </span>
            {/* Ajout du span si l'élément est actif */}
            {pathname === item.href && (
              <span className="underline block h-1 bg-green-600 mt-1"></span>
            )}
          </a>
        ))}
      </nav>
      <UserModal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
};

export default Header;
