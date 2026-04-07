import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">

          {/* Big 404 display */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500 mb-3">
            Error 404
          </p>
          <h1 className="text-7xl font-bold text-zinc-900 sm:text-8xl">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-800 sm:text-3xl">
            Page Not Found
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-sm leading-7 text-zinc-600 sm:text-base">
            The link you followed to get here must be broken, or the page no longer exists.
            Don't worry — head back home and try again.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-block rounded-xl border-2 border-zinc-900 bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors"
            >
              ← Back to Home
            </Link>
            <Link
              to="/articles"
              className="inline-block rounded-xl border-2 border-zinc-900 px-6 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              Browse Articles
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;