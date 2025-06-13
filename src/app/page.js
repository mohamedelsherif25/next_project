export const metadata = {
  title: "Home",
  description:
    "Welcome page for ITI Damanhour project by Mohamed Hossam El Sherif",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded shadow-lg max-w-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome</h1>
        <p className="text-lg text-gray-700 mb-6">ITI Damanhour</p>
        <p className="text-sm text-gray-500">Mohamed Hossam El Sherif</p>
      </div>
    </main>
  );
}
