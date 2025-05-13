"use client";

import React from "react";

interface ForumData {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface ForumFormProps {
  initialData?: ForumData;
  onSave: (data: ForumData) => void;
  onCancel: () => void;
}

export default function ForumForm({
  initialData,
  onSave,
  onCancel,
}: ForumFormProps) {
  const [formData, setFormData] = React.useState({
    id: initialData?.id || 0,
    title: initialData?.title || "",
    description: initialData?.description || "",
    price: initialData?.price || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Judul</label>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Deskripsi
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Harga</label>
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
        >
          Batal
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {initialData ? "Update" : "Tambah"}
        </button>
      </div>
    </form>
  );
}
