"use client";

import { useState } from "react";
import DiscussionTable from "./components/DiskusiTable";
import DiscussionForm from "./components/DiskusiForm";

export default function ForumDiskusiPage() {
  const [discussions, setDiscussions] = useState<
    { id: number; title: string; message: string }[]
  >([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleInsert = (newData: any) => {
    setDiscussions((prev) => [...prev, { ...newData, id: Date.now() }]);
    setShowForm(false);
  };

  const handleUpdate = (updated: any) => {
    setDiscussions((prev) =>
      prev.map((d) => (d.id === updated.id ? updated : d))
    );
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    setDiscussions((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Forum Diskusi</h1>

      <DiscussionTable
        data={discussions}
        onEdit={setEditing}
        onDelete={handleDelete}
      />

      {(editing || showForm) && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <DiscussionForm
            initialData={editing || undefined}
            onSave={editing ? handleUpdate : handleInsert}
            onCancel={() => {
              setEditing(null);
              setShowForm(false);
            }}
          />
        </div>
      )}

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-16 h-16 text-2xl font-bold flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        +
      </button>
    </div>
  );
}
