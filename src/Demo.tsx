import { useState } from 'react';
import type { Lang } from './i18n';
import { Shell } from './ui/Shell';
import { Frame } from './ui/Frame';
import { PieceArt } from './components/PieceArt';
import { PIECES } from './data/pieces';
import { addLine, buildMessage, findForbidden, setQty, whatsappUrl, type Line } from './lib/order';

const T = {
  en: {
    eyebrow: 'Case study / online catalog', title: 'El 23 silver jewelry: order list via WhatsApp',
    lead: 'A catalog with no prices and no checkout. The customer builds a list and sends it to the store by WhatsApp to get a quote.',
    price: 'Price on request', add: 'Add to list', list: 'Your list', empty: 'Your list is empty.', msg: 'Message to send', send: 'Send via WhatsApp', qty: 'Quantity',
    remove: 'Remove', note: 'The demo catalog is fictional. The real store, El 23, is a physical silver jewelry shop that allowed itself to be named; its live catalog is linked in the case study.', blocked: 'Blocked terms found',
  },
  es: {
    eyebrow: 'Caso de estudio / catálogo en línea', title: 'Joyería de plata El 23: lista de pedido por WhatsApp',
    lead: 'Un catálogo sin precios y sin pago en línea. El cliente arma una lista y la envía a la tienda por WhatsApp para pedir cotización.',
    price: 'Precio bajo pedido', add: 'Agregar a la lista', list: 'Tu lista', empty: 'Tu lista está vacía.', msg: 'Mensaje a enviar', send: 'Enviar por WhatsApp', qty: 'Cantidad',
    remove: 'Quitar', note: 'El catálogo de la demo es ficticio. La tienda real, El 23, es una joyería física de plata que permitió ser nombrada; su catálogo en vivo está enlazado en el caso de estudio.', blocked: 'Términos bloqueados encontrados',
  },
};

export function Demo({ lang }: { lang: Lang }) {
  const t = T[lang];
  const [lines, setLines] = useState<Line[]>([]);
  const text = buildMessage(lines, lang);
  const bad = findForbidden(text);

  return (
    <Shell lang={lang} eyebrow={t.eyebrow} title={t.title} lead={t.lead}>
      <Frame tl="CATALOG" tr="12 / fictional">
        <div className="grid">
          {PIECES.map((p) => (
            <article key={p.id} className="card">
              <PieceArt category={p.category} />
              <h3 style={{ marginTop: 'var(--s-2)' }}>{p.name[lang]}</h3>
              <p className="note">{p.id} / {p.size}</p>
              <p className="mono acc">{t.price}</p>
              <button className="btn" onClick={() => setLines(addLine(lines, p.id, p.name[lang]))} aria-label={`${t.add}: ${p.name[lang]}`}>{t.add}</button>
            </article>
          ))}
        </div>
      </Frame>

      <Frame tl="LIST">
        <h2>{t.list}</h2>
        {lines.length === 0 ? <p className="mut">{t.empty}</p> : (
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 'var(--s-2)' }}>
            {lines.map((l) => (
              <li key={l.id} className="row">
                <span style={{ flex: '1 1 12rem' }}>{l.name} <span className="note">({l.id})</span></span>
                <label className="vh" htmlFor={`q-${l.id}`}>{t.qty}</label>
                <input id={`q-${l.id}`} type="number" min={1} value={l.qty} onChange={(e) => setLines(setQty(lines, l.id, Number(e.target.value)))} style={{ width: '5rem' }} />
                <button className="toggle" onClick={() => setLines(setQty(lines, l.id, 0))}>{t.remove}</button>
              </li>
            ))}
          </ul>
        )}
        <h3 style={{ marginTop: 'var(--s-4)' }}>{t.msg}</h3>
        <pre data-testid="message">{lines.length ? text : '-'}</pre>
        {bad.length > 0 && <p className="note">{t.blocked}: {bad.join(', ')}</p>}
        <a className="btn primary" aria-disabled={lines.length === 0 || bad.length > 0} href={lines.length && !bad.length ? whatsappUrl(text) : undefined} target="_blank" rel="noopener noreferrer"
          style={lines.length && !bad.length ? undefined : { opacity: 0.45, pointerEvents: 'none' }}>{t.send}</a>
      </Frame>
      <p className="note">{t.note}</p>
    </Shell>
  );
}
