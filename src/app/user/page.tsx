// app/dashboard/page.tsx

"use client";

import { useState } from "react";
import UserTable from "./components/UserTable";
import EditForm from "./components/EditForm";
import InsertForm from "./components/InserForm";
type User = {
  id: number;
  name: string;
  email: string;
};

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  ]);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showInsertForm, setShowInsertForm] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedUser: User) => {
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    setEditingUser(null);
  };

  const handleInsert = (newUser: User) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setShowInsertForm(false);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        User Dashboard
      </h1>

      {/* User Table */}
      <UserTable users={users} onDelete={handleDelete} onEdit={handleEdit} />

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <EditForm
              user={editingUser}
              onSave={handleUpdate}
              onCancel={() => setEditingUser(null)}
            />
          </div>
        </div>
      )}

      {/* Insert Modal */}
      {showInsertForm && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <InsertForm
              onInsert={handleInsert}
              onCancel={() => setShowInsertForm(false)}
            />
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowInsertForm(true)}
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        +
      </button>
    </div>
  );
}
