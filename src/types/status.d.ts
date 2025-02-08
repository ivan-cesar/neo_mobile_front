export interface Status {
    id: string;
    content: string;
    authorId: string;
    likes: number;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export type CreateStatusInput = Omit<Status, "id" | "likes" | "createdAt" | "updatedAt">;
  