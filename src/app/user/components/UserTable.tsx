// components/UserTable.tsx

"use client";

import React from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              ID
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Name
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Email
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{user.email}</td>
              <td className="px-6 py-4 text-sm text-gray-900 space-x-3">
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:text-blue-700 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-red-600 hover:text-red-700 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
