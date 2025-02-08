export interface ChatItemProps {

    id: number;
    name: string;
    avatar: StaticImageData;
    lastMessage: string;
    timestamp: string;
    status?: "unread" | "read" | "photo";
    statusIcon?: string; // Ex: ✓✓ for read messages
    badgeCount?: number;
  }