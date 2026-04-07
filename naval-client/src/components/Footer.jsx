const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Christopher's Studio
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            A simple website teaching you how to build apps with React and React Router.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-zinc-500">
          <a href="/" className="hover:text-zinc-900 transition-colors">Home</a>
          <a href="/articles" className="hover:text-zinc-900 transition-colors">Articles</a>
          <a href="/about" className="hover:text-zinc-900 transition-colors">About</a>
        </div>

        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} CStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;