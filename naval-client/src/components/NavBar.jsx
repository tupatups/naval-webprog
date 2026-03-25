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
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50'
      : 'border-transparent text-zinc-500 hover:border-zinc-900 hover:bg-zinc-50 hover:text-zinc-900',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-zinc-900 bg-zinc-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo with Actual Image */}
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Your Logo Image */}
            <div className="w-10 h-10 rounded-lg overflow-hidden transform transition-transform group-hover:scale-105 shadow-md">
              <img 
                src={logo} 
                alt="WireFrame Studio Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-zinc-900 tracking-tight">Christopher's</p>
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Studio</p>
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

        {/* Mobile Menu Indicator (Visual Only) */}
        <div className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-zinc-200 transition cursor-pointer">
          <div className="w-5 h-0.5 bg-zinc-900 rounded-full"></div>
          <div className="w-5 h-0.5 bg-zinc-900 rounded-full"></div>
          <div className="w-5 h-0.5 bg-zinc-900 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;