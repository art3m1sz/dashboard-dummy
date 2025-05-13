"use client";

import { useState } from "react";
import ChatTable from "./components/RiwayatChatTable";
import ChatForm from "./components/RiwayatChatForm";

export default function ChatPage() {
  const [chats, setChats] = useState<
    { id: number; sender: string; message: string; timestamp: string }[]
  >([]);
  const [editing, setEditing] = useState<any | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleInsert = (newData: any) => {
    setChats((prev) => [...prev, { ...newData, id: Date.now() }]);
    setShowForm(false);
  };

  const handleUpdate = (updated: any) => {
    setChats((prev) =>
      prev.map((chat) => (chat.id === updated.id ? updated : chat))
    );
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    setChats((prev) => prev.filter((chat) => chat.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Chat History</h1>

      <ChatTable data={chats} onEdit={setEditing} onDelete={handleDelete} />

      {(editing || showForm) && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <ChatForm
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
