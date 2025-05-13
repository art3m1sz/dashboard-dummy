"use client";

import React from "react";

interface ChatData {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

interface ChatFormProps {
  initialData?: ChatData;
  onSave: (data: ChatData) => void;
  onCancel: () => void;
}

export default function ChatForm({
  initialData,
  onSave,
  onCancel,
}: ChatFormProps) {
  const [formData, setFormData] = React.useState({
    id: initialData?.id || 0,
    sender: initialData?.sender || "",
    message: initialData?.message || "",
    timestamp: initialData?.timestamp || new Date().toISOString(),
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
        <label className="block text-sm font-medium text-gray-700">
          Sender
        </label>
        <input
          name="sender"
          value={formData.sender}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Timestamp
        </label>
        <input
          name="timestamp"
          value={formData.timestamp}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
          type="datetime-local"
          required
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}
