export default function AboutUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        This website was developed as part of a web development course project
        using the Next.js framework.
      </p>
      <p>
        The goal is to demonstrate basic skills in building modern web
        applications using:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Client Components</li>
          <li>Static Generation</li>
        </ul>
      </p>
    </div>
  );
}
