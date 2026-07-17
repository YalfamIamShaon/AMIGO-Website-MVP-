export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6] text-neutral-800 p-4 text-center">
      <h1 className="text-8xl font-black text-orange-600 mb-4 font-mono">404</h1>
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">Page Not Found</h2>
      <p className="text-neutral-500 max-w-md mb-8">
        Sorry, we couldn't find the page you're looking for. Let's get you back to the home page.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md inline-block font-sans"
      >
        Back to Home
      </a>
    </div>
  );
}
