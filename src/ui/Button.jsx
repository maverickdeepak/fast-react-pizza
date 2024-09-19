import React from 'react';

export const Button = ({ children, disabled }) => {
  return (
    <button
      className="inline-block rounded-full bg-violet-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-violet-700 hover:text-stone-300 focus:outline-none focus:ring-1 focus:ring-violet-400 focus:ring-offset-2 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
