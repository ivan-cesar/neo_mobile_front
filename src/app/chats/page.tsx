"use client";

import React, { useState } from 'react';
import ChatList from '@/components/layouts/ChatList';
import Conversation from '@/components/layouts/Conversation';

const Page: React.FC = () => {
  const [showConversation, setShowConversation] = useState(false);

  const handleChatItemClick = () => {
    setShowConversation(true);
  };

  const handleOnClose = () => {
    setShowConversation(false);
  };

  return (
    <div className="flex flex-col h-screen w-full">

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {showConversation ? (
          <Conversation onClose={handleOnClose} />
        ) : (
          <ChatList onChatItemClick={handleChatItemClick} />
        )}
      </div>
    </div>
  );
};

export default Page;