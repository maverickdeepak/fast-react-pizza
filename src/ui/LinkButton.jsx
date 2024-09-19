import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const classname = 'text-sm text-stone-600 hover:text-stone-90';

  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={classname}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}
