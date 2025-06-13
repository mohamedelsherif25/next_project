export default function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or suggestions, feel free to contact us via
        email.
      </p>
      <p>
        Email:{" "}
        <a
          href="mailto:support@example.com"
          className="text-blue-500 underline"
        >
          support@example.com
        </a>
      </p>
    </div>
  );
}
