"use client";

import { useStatuses } from "@/hooks/useStatus";

export default function StatusPage() {
  const { statuses, loading: isLoading, error } = useStatuses();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur : {error.message}</div>;
  }

  if (!statuses || statuses.length === 0) {
    return <div>Aucun statut disponible.</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Statuts</h1>
      <div className="space-y-4">
        {statuses.map((status) => (
          <div
            key={status.id}
            className="p-4 bg-white rounded-lg shadow"
          >
            <p className="text-gray-800">{status.content}</p>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(status.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
