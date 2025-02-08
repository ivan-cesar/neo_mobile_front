import React from 'react';
import Image from 'next/image';
import ChatInput from '../widgets/ChatInput';
import avatar from "../../public/assets/image.png";
import car1 from "../../public/assets/car.png";
import car2 from "../../public/assets/car1.png";
import car3 from "../../public/assets/car2.png";
import car4 from "../../public/assets/car3.png";
import { ArrowLeft, Store, Phone, EllipsisVertical } from 'lucide-react';

interface ConversationProps {
  onClose: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-gray-100">
      <div className="flex items-center justify-between p-4 border-b bg-white shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={onClose} className="text-gray-700 hover:text-black">
            <ArrowLeft />
          </button>
          <Image src={avatar} alt="Avatar" width={40} height={40} className="rounded-full" />
          <div>
            <div className="font-semibold text-gray-900">Mercedes Home</div>
            <div className="text-sm text-gray-500">GLE rouge bordeaux</div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="text-gray-700 hover:text-black"><Store /></button>
          <button className="text-gray-700 hover:text-black"><Phone /></button>
          <button className="text-gray-700 hover:text-black"><EllipsisVertical /></button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-center text-gray-500 bg-gray-200 text-xs rounded-full py-1 w-40 mx-auto mb-4">Fri, Jul 26</div>

        <div className="flex justify-end mb-4">
          <div className="bg-green-100 p-2 rounded-lg shadow-md">Photo</div>
          <div className="text-xs text-gray-500 ml-2 self-end">17:47</div>
        </div>

        <div className="grid grid-cols-2 bg-white rounded-lg p-4 gap-2 mb-4 shadow-sm">
          <Image src={car1} alt="Car" width={100} height={100} className="rounded-lg w-full" />
          <Image src={car2} alt="Car" width={100} height={100} className="rounded-lg w-full" />
          <Image src={car3} alt="Car" width={100} height={100} className="rounded-lg w-full" />
          <div className="relative">
            <Image src={car4} alt="Car" width={100} height={100} className="rounded-lg w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white font-bold rounded-lg">+3</div>
          </div>
        </div>

        <div className="flex justify-start mb-4">
          <div className="bg-white border border-yellow-500 p-3 rounded-lg shadow-md">
            <span role="img" aria-label="point">👆</span> Admirer les photos réelles de la <span className="font-bold">GLE</span>, comment la trouvez-vous ?
          </div>
          <div className="text-xs text-gray-500 ml-2 self-end">11:40</div>
        </div>

        <div className="flex justify-end mb-4">
          <div className="bg-green-100 p-3 rounded-lg shadow-md">C’est Parfait. 👍 😎</div>
          <div className="text-xs text-gray-500 ml-2 self-end">11:43</div>
        </div>

        <div className="flex justify-start mb-4">
          <div className="bg-white border border-yellow-500 p-3 rounded-lg shadow-md">
            <span role="img" aria-label="point">👆</span> La <span className="font-bold">GLE</span> est notre dernier modèle tendance. Nous pouvons vous recevoir dans notre show-room demain matin à 10h.
            <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
          </div>
          <div className="text-xs text-gray-500 ml-2 self-end">11:40</div>
        </div>
      </div>
      
    {/* <div className="flex justify-start mb-4">
      <div className="relative bg-white p-4 rounded-2xl shadow-lg w-full">
        kbtbtb
        <div className="absolute left-4 -bottom-2 w-4 h-4 bg-white rotate-45 shadow-lg"></div>
      </div>
    </div> */}
      <div className="p-4 bg-white border-t">
        <ChatInput /> 
      </div>
    </div>
  );
};

export default Conversation;
