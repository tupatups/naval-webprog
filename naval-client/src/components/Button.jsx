import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'border-[#1f5c44] bg-[#1f5c44] text-[#f7f3e8] hover:bg-[#194a38]',
  secondary: 'border-[#8f7a3d]/65 bg-[#e9dfc6] text-[#1f3d33] hover:bg-[#dfd2b3]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
