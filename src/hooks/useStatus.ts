import { useState, useEffect } from "react";
import { statusService } from "@/services/statusService";
import type { Status } from "@/types/status";

export function useStatuses() {
  const [statuses, setStatuses] = useState<Status[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null); // Explicitly define the error type

  useEffect(() => {
    statusService.getAll()
      .then(setStatuses)
      .catch((err) => setError(err)) // Ensure the error is of type Error
      .finally(() => setLoading(false));
  }, []);

  return { statuses, loading, error };
}