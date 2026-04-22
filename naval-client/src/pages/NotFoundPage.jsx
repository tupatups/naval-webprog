import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#e6dcc3] px-4 py-10 sm:px-6 lg:px-8">
      <section className="w-full max-w-3xl text-center">

          {/* Big 404 display */}
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
            Error 404
          </p>
          <h1 className="text-7xl font-bold text-[#16392e] sm:text-8xl">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-[#1f3d33] sm:text-3xl">
            Page Not Found
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#2f473d] sm:text-base">
            The link you followed to get here must be broken, or the page no longer exists.
            Don't worry — head back home and try again.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block rounded-xl border-2 border-[#1f5c44] bg-[#1f5c44] px-6 py-2.5 text-sm font-semibold text-[#f7f3e8] transition-colors hover:bg-[#194a38]"
            >
              ← Back to Home
            </Link>
            <Link
              to="/articles"
              className="inline-block rounded-xl border-2 border-[#8f7a3d]/65 bg-[#e9dfc6] px-6 py-2.5 text-sm font-semibold text-[#1f3d33] transition-colors hover:bg-[#dfd2b3]"
            >
              Browse Articles
            </Link>
          </div>

      </section>
    </div>
  );
}

export default NotFoundPage;
