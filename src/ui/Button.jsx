import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, disabled, to, type }) => {
  const base =
    'inline-block rounded-full bg-violet-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-violet-700 hover:text-stone-300 focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
    small: base + ' px-4 py-2 sm:px-5 sm:py-2 text-xs',
    secondary:
      'inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 sm:px-6 sm:py-3.5 font-semibold uppercase tracking-wide hover:bg-stone-300 text-stone-800 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
};
