export default function LoginPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4 max-w-md mx-auto">
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-1">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="w-full border px-3 py-2 rounded"
            placeholder="example@example.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border px-3 py-2 rounded"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
