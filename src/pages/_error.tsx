import { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6] text-neutral-800 p-4 text-center">
      <h1 className="text-6xl font-black text-rose-600 mb-4 font-mono">
        {statusCode || "Error"}
      </h1>
      <h2 className="text-2xl font-bold mb-4 text-neutral-900">
        {statusCode === 404 ? "Page Not Found" : "An unexpected error occurred"}
      </h2>
      <p className="text-neutral-500 max-w-md mb-8">
        We encountered an error during processing. Let's get you back to the home page.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-md inline-block"
      >
        Back to Home
      </a>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
