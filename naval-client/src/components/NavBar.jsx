import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];
  
const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#1f5c44] bg-[#1f5c44] text-[#f7f3e8]'
      : 'border-transparent text-[#4b5a4f] hover:border-[#8f7a3d]/70 hover:bg-[#dfd2b3] hover:text-[#16392e]',
  ].join(' ');

const authLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#1f5c44] bg-[#1f5c44] text-[#f7f3e8]'
      : 'border-[#8f7a3d]/60 bg-[#e9dfc6] text-[#1f3d33] hover:border-[#8f7a3d] hover:bg-[#dfd2b3] hover:text-[#17342b]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#8f7a3d]/50 bg-[#e9dfc6]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo with Actual Image */}
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="relative">
            {/* Your Logo Image */}
            <div className="h-10 w-10 overflow-hidden rounded-lg shadow-md transition-transform group-hover:scale-105">
              <img 
                src={logo} 
                alt="WireFrame Studio Logo" 
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-0.5">
            <p className="text-xl font-bold tracking-tight text-[#16392e]">Christopher's</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6f5c28]">Studio</p>
          </div>
        </NavLink>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}
              className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/auth/signin"
            className={({ isActive }) => `${authLinkClassName({ isActive })} px-3 sm:px-4`}>
            Sign In
          </NavLink>

          <NavLink
            to="/auth/signup"
            className={({ isActive }) =>
              `${authLinkClassName({ isActive })} hidden sm:inline-flex`
            }>
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Indicator (Visual Only) */}
        <div className="cursor-pointer rounded-lg p-2 transition hover:bg-[#efe7d2] md:hidden">
          <div className="mb-1.5 h-0.5 w-5 rounded-full bg-[#16392e]"></div>
          <div className="mb-1.5 h-0.5 w-5 rounded-full bg-[#16392e]"></div>
          <div className="h-0.5 w-5 rounded-full bg-[#16392e]"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
