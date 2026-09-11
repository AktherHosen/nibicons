'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CATEGORIES, svgMarkup } from '../data/icons';

export default function IconBrowser({ icons }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [copiedName, setCopiedName] = useState(null);

  const filtered = useMemo(() => {
    return icons.filter((icon) => {
      const matchesCategory = category === 'all' || icon.category === category;
      const matchesQuery = icon.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [icons, query, category]);

  const handleCopy = async (icon) => {
    try {
      await navigator.clipboard.writeText(svgMarkup(icon));
      setCopiedName(icon.name);
      setTimeout(() => setCopiedName((current) => (current === icon.name ? null : current)), 900);
    } catch (err) {
      // ignore clipboard failures (e.g. insecure context)
    }
  };

  return (
    <>
      <div className="browser-controls">
        <div className="search-field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <line x1="15.5" y1="15.5" x2="20.5" y2="20.5" />
          </svg>
          <input
            type="text"
            placeholder="Search icons by name…"
            autoComplete="off"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="chip-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`chip${cat === category ? ' active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="icon-grid">
        {filtered.length === 0 && (
          <div className="empty-state">No icons match &ldquo;{query}&rdquo;. Try a different search or category.</div>
        )}
        {filtered.map((icon) => (
          <div
            key={icon.name}
            className={`icon-card${copiedName === icon.name ? ' copied' : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`Copy ${icon.name} icon SVG`}
            onClick={() => handleCopy(icon)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCopy(icon);
              }
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: icon.svg }} />
            <Link
              href={`/icons/${icon.name}`}
              className="icon-name mono"
              onClick={(e) => e.stopPropagation()}
            >
              {icon.name}
            </Link>
            <div className="copied-flag">Copied</div>
          </div>
        ))}
      </div>
    </>
  );
}
