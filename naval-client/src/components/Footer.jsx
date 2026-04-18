const Footer = () => {
  return (
    <footer className="border-t-2 border-[#8f7a3d]/50 bg-[#e9dfc6] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6f5c28]">
            Christopher's Studio
          </p>
          <p className="mt-1 text-sm text-[#2f473d]">
            A simple website teaching you how to build apps with React and React Router.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-[#5e6a58]">
          <a href="/" className="transition-colors hover:text-[#1f5c44]">Home</a>
          <a href="/articles" className="transition-colors hover:text-[#1f5c44]">Articles</a>
          <a href="/about" className="transition-colors hover:text-[#1f5c44]">About</a>
        </div>

        <p className="text-xs text-[#6b6c57]">
          © {new Date().getFullYear()} CStudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
