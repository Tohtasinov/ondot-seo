export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-gray-600">The page you are looking for does not exist.</p>
      <a href="/" className="mt-6 inline-block rounded bg-black px-4 py-2 text-white">Back to home</a>
    </div>
  );
}
