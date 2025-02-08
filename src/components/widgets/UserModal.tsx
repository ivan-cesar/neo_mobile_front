import Image from 'next/image';
import React from 'react';
import avatar from '../../public/assets/image.png';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-3 rounded shadow-md w-[50%] max-w-sm" style={{ position: 'absolute', top: '4%', right: '5%', }} onClick={(e) => e.stopPropagation()}>
        <div className='grid grid-cols-3 items-center'>
          <div className="flex justify-center items-center">
             <Image src={avatar} width={40} height={40} alt='avatar' className="rounded-full border border-gray-300"/>
          </div> 
          <div className="flex flex-col justify-center ml-2 col-span-2 ">
             <div className="font-semibold text-gray-800 text-sm">Marina Kouassi</div>
             <div className="text-gray-500 text-xs">+225 0759028545</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
