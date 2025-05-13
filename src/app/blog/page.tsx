"use client";

import { useState } from "react";
import BlogTable from "./components/BlogTable";
import BlogForm from "./components/BlogForm";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<
    { id: number; title: string; content: string }[]
  >([]);
  const [editingBlog, setEditingBlog] = useState<{
    id: number;
    title: string;
    content: string;
  } | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleInsert = (newBlog: {
    id: number;
    title: string;
    content: string;
  }) => {
    setBlogs((prev) => [...prev, { ...newBlog, id: Date.now() }]);
    setShowForm(false);
  };

  const handleUpdate = (updated: {
    id: number;
    title: string;
    content: string;
  }) => {
    setBlogs((prev) => prev.map((b) => (b.id === updated.id ? updated : b)));
    setEditingBlog(null);
  };

  const handleDelete = (id: number) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Blog Dashboard
      </h1>

      <BlogTable
        blogs={blogs}
        onEdit={setEditingBlog}
        onDelete={handleDelete}
      />

      {(editingBlog || showForm) && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50">
          <BlogForm
            initialData={editingBlog || undefined}
            onSave={editingBlog ? handleUpdate : handleInsert}
            onCancel={() => {
              setEditingBlog(null);
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
