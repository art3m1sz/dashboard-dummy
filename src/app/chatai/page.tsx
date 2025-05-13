"use client";

export default function ChatAi() {
  const chatAiData = [
    {
      id: 1,
      sender: "User",
      message: "Hi, can you help me?",
      timestamp: "2025-05-13 10:00",
    },
    {
      id: 2,
      sender: "AI",
      message: "Hello! How can I assist you today?",
      timestamp: "2025-05-13 10:01",
    },
    {
      id: 3,
      sender: "User",
      message: "I need help with a coding problem.",
      timestamp: "2025-05-13 10:05",
    },
    {
      id: 4,
      sender: "AI",
      message: "Sure! Please provide more details.",
      timestamp: "2025-05-13 10:06",
    },
    {
      id: 5,
      sender: "User",
      message: "I'm working on a Next.js project.",
      timestamp: "2025-05-13 10:10",
    },
    {
      id: 6,
      sender: "AI",
      message:
        "Great! What part of your Next.js project do you need help with?",
      timestamp: "2025-05-13 10:11",
    },
  ];

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg border border-gray-300 mb-8 mx-8">
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
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {chatAiData.map((chat) => (
            <tr key={chat.id} className="hover:bg-blue-50">
              <td className="px-6 py-4 text-sm text-gray-900">{chat.sender}</td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {chat.message}
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">
                {chat.timestamp}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
