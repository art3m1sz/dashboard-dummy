"use client";

import React from "react";

interface BlogTableProps {
  blogs: { id: number; title: string; content: string }[];
  onEdit: (blog: { id: number; title: string; content: string }) => void;
  onDelete: (id: number) => void;
}

export default function BlogTable({ blogs, onEdit, onDelete }: BlogTableProps) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Title
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Content
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {blogs.map((blog) => (
            <tr key={blog.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 text-sm text-gray-900">{blog.title}</td>
              <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-xs">
                {blog.content}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 space-x-3">
                <button
                  onClick={() => onEdit(blog)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(blog.id)}
                  className="text-red-600 hover:text-red-700"
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
}
