import { axiosClient } from "@/lib/axiosClient";
import type { Status, CreateStatusInput } from "@/types/status";

export const statusService = {
  getAll: async () => {
    const { data } = await axiosClient.get<Status[]>("/api/statuts");
    return data;
  },

  getById: async (id: string) => {
    const { data } = await axiosClient.get<Status>(`/api/statuts/${id}`);
    return data;
  },

  create: async (input: CreateStatusInput) => {
    const { data } = await axiosClient.post<Status>("/api/statuts", input);
    return data;
  },

  delete: async (id: string) => {
    await axiosClient.delete(`/api/statuts/${id}`);
  },
};
