"use client";

interface ForumData {
  id: number;
  title: string;
  description: string;
  price: string;
}

interface ForumTableProps {
  data: ForumData[];
  onEdit: (item: ForumData) => void;
  onDelete: (id: number) => void;
}

export default function ForumTable({
  data,
  onEdit,
  onDelete,
}: ForumTableProps) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300 mb-8">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Judul
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Deskripsi
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Harga
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-blue-800">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 text-sm text-gray-900">{item.title}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {item.description}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{item.price}</td>
              <td className="px-6 py-4 text-sm text-gray-900 space-x-3">
                <button
                  onClick={() => onEdit(item)}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
