import type { Category } from '../data/pieces';

/** Simple SVG glyph per category, drawn from scratch. Decorative: the card carries the name. */
export function PieceArt({ category }: { category: Category }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true" focusable="false" style={{ width: '100%', height: 'auto', color: 'var(--mut)' }}>
      {category === 'ring' && (<><circle cx="60" cy="52" r="26" {...s} /><circle cx="60" cy="22" r="7" {...s} /></>)}
      {category === 'chain' && (<>{[0, 1, 2, 3, 4].map((i) => <ellipse key={i} cx={20 + i * 20} cy="45" rx="11" ry="7" {...s} />)}</>)}
      {category === 'bracelet' && (<><ellipse cx="60" cy="45" rx="40" ry="26" {...s} /><ellipse cx="60" cy="45" rx="28" ry="16" {...s} /></>)}
      {category === 'earrings' && (<><path d="M38 14v22" {...s} /><circle cx="38" cy="52" r="14" {...s} /><path d="M82 14v22" {...s} /><circle cx="82" cy="52" r="14" {...s} /></>)}
      {category === 'charm' && (<><circle cx="60" cy="18" r="5" {...s} /><path d="M60 24c-18 0-26 14-18 28s30 14 38 0c-12 2-22-8-20-28z" {...s} /></>)}
      {category === 'necklace' && (<><path d="M16 14c4 34 20 52 44 52s40-18 44-52" {...s} /><circle cx="60" cy="70" r="9" {...s} /></>)}
    </svg>
  );
}
