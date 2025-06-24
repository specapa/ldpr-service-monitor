'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchBar from '@/app/components/SearchBar';

const ResultPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  const initialPath = params.get('path') || '';

  const [query, setQuery] = useState(initialPath.replaceAll('/', ' '));
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null); // Контейнер для HTML

  useEffect(() => {
    if (!initialPath) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:80/${initialPath}`);
        if (!res.ok) throw new Error();
        const text = await res.text();
        setHtml(text);
      } catch {
        setHtml('<div style="color: red; padding: 2rem;">Ошибка загрузки данных.</div>');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Исполняем скрипты после вставки HTML
  useEffect(() => {
    if (html && contentRef.current) {
      const container = contentRef.current;
      container.innerHTML = html;

      const scripts = container.querySelectorAll("script");
      scripts.forEach(oldScript => {
        const newScript = document.createElement("script");
        [...oldScript.attributes].forEach(attr =>
          newScript.setAttribute(attr.name, attr.value)
        );
        newScript.textContent = oldScript.textContent;
        oldScript.replaceWith(newScript);
      });
    }
  }, [html]);

  const handleSubmit = () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const newPath = trimmed.split(/\s+/).join('/');
    if (!newPath) return;

    router.push(`/result?path=${encodeURIComponent(newPath)}`);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={handleSubmit}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xl px-4"
      />

      <div className="absolute inset-0 pt-0 overflow-auto">
        {loading ? (
          <div className="text-center text-gray-600 py-8 animate-pulse">
            Загрузка...
          </div>
        ) : (
          <div ref={contentRef} className="w-full h-full" />
        )}
      </div>
    </div>
  );
};

export default ResultPage;
