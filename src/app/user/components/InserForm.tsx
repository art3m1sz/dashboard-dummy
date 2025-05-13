// components/InsertForm.tsx

"use client";

import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

interface InsertFormProps {
  onInsert: (newUser: User) => void;
  onCancel: () => void;
}

const InsertForm: React.FC<InsertFormProps> = ({ onInsert, onCancel }) => {
  const [newUser, setNewUser] = React.useState<User>({
    id: 0,
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(newUser);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          value={newUser.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500"
          value={newUser.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 px-4 py-2 rounded-md text-gray-600 hover:bg-gray-300 transition duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default InsertForm;
