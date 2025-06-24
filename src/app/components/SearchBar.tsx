'use client';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Введите запрос...',
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-md focus-within:ring-2 focus-within:ring-blue-300 transition">
        <span className="pl-4 text-gray-400 text-sm select-none">🔍</span>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit();
            }
          }}
          className="flex-grow px-4 py-2 text-sm rounded-full outline-none bg-transparent text-black"
        />
        <button
          type="button"
          onClick={onSubmit}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-200 mr-0 hover:scale-110"
        >
          Поиск
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
