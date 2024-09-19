import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, disabled, to }) => {
  const className =
    'inline-block rounded-full bg-violet-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-violet-700 hover:text-stone-300 focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};
