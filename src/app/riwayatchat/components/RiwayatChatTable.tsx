"use client";

interface ChatData {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
}

interface ChatTableProps {
  data: ChatData[];
  onEdit: (item: ChatData) => void;
  onDelete: (id: number) => void;
}

export default function ChatTable({ data, onEdit, onDelete }: ChatTableProps) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Sender
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Message
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Timestamp
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 text-sm text-gray-900">{item.sender}</td>
              <td className="px-6 py-4 text-sm text-gray-900 truncate max-w-xs">
                {item.message}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {item.timestamp}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 space-x-3">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-800"
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
