"use client";

interface UserCardProps {
  name: string;
  email: string;
}

export default function UserCard({ name, email }: UserCardProps) {
  return (
    <div className="bg-white shadow p-4 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}
