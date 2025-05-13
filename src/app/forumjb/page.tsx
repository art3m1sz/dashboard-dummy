"use client";

import { useState } from "react";
import ForumTable from "./components/ForumTable";
import ForumForm from "./components/ForumForm";

export default function ForumPage() {
  const [forums, setForums] = useState<
    { id: number; title: string; description: string; price: string }[]
  >([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleInsert = (newData: any) => {
    setForums((prev) => [...prev, { ...newData, id: Date.now() }]);
    setShowForm(false);
  };

  const handleUpdate = (updated: any) => {
    setForums((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    setForums((prev) => prev.filter((f) => f.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Forum Jual Beli</h1>

      <ForumTable data={forums} onEdit={setEditing} onDelete={handleDelete} />

      {(editing || showForm) && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <ForumForm
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
