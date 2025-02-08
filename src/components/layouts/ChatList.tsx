"use client";

import React from "react";
import { ChatItemProps } from "@/types/chat";
import ava1 from "../../public/assets/image.png";
import Image from "next/image";
import ava2 from "../../public/assets/image1.png";
import ava3 from "../../public/assets/image2.png";

// Sample chat data
const chats: ChatItemProps[] = [
  {
    id: 1,
    name: "Valorisor",
    avatar: ava1,
    lastMessage: "🎤 0:14",
    timestamp: "il y a 2h",
    status: "unread",
    badgeCount: 2,
  },
  {
    id: 2,
    name: "Lify",
    avatar: ava2,
    lastMessage: "Vous êtes situés où ?",
    timestamp: "10/30/19",
    status: "read",
    statusIcon: "✓✓",
  },
  {
    id: 3,
    name: "Soldes time",
    avatar: ava3,
    lastMessage: "📷 Photo",
    timestamp: "10/28/19",
    status: "photo",
  },
];

interface ChatListProps {
  onChatItemClick: (chat: ChatItemProps) => void;
}

const ChatList: React.FC<ChatListProps> = ({ onChatItemClick }) => {
  return (
    <div className="bg-white p-4 shadow-md w-full">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center justify-between border-b last:border-none py-3"
          onClick={() => onChatItemClick(chat)} // Add onClick event
        >
          {/* Avatar */}
          <div className="flex items-center space-x-3">
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={50}
              height={50}
              className="rounded-full"
              style={{ backgroundColor: "red" }}
            />
           

            <div>
              {/* Chat Name */}
              <p className="font-semibold text-gray-800">{chat.name}</p>
              {/* Last Message */}
              <p className="text-sm text-gray-500 flex justify-between items-center">
                {chat.status === "photo" && (
                  <span className="mr-1">📷</span>
                )}
                {chat.lastMessage}
              </p>
            </div>
          </div>

          {/* Timestamp and Badge */}
          <div className="text-right">
            <p className="text-xs text-gray-400">{chat.timestamp}</p>
            {chat.status === "read" && (
              <span className="ml-1 text-blue-500 justify-end text-right">{chat.statusIcon}</span>
            )}
            {chat.badgeCount && (
              <span className="inline-block bg-green-600 text-white text-xs rounded-full px-2 py-1 mt-1">
                {chat.badgeCount}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;