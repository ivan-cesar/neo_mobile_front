import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { statusService } from "@/services/statusService";
import type { CreateStatusInput } from "@/types/status";

export function useStatuses() {
  return useQuery({
    queryKey: ["statuses"],
    queryFn: statusService.getAll,
  });
}

export function useStatus(id: string) {
  return useQuery({
    queryKey: ["status", id],
    queryFn: () => statusService.getById(id),
  });
}

export function useCreateStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateStatusInput) => statusService.create(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["statuses"] });
    },
  });
}

export function useDeleteStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => statusService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["statuses"] });
    },
  });
}
