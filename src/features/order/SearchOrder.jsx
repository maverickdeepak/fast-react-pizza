import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className={
          'rounded-full bg-violet-100 px-4 py-2' +
          ' placeholder:text-stone-400' +
          ' w-28 text-sm sm:w-64 sm:focus:w-72' +
          ' transition-all duration-300' +
          ' focus:outline-none focus:ring' +
          ' focus:ring-violet-400 focus:ring-offset-2' +
          ' focus:ring-opacity-50'
        }
      />
    </form>
  );
}

export default SearchOrder;
