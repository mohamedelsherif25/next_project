export default function UserCard({ user }) {
  return (
    <div className="bg-white shadow rounded p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-blue-600">{user.name}</h3>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
    </div>
  );
}
