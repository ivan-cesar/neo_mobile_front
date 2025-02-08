export interface Profile {
    id: string;
    username: string;
    email: string;
    avatar?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateProfileInput = Omit<Profile, "id" | "createdAt" | "updatedAt">;
  