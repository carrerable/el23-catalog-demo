import type { Lang } from '../i18n';

export interface Line { id: string; name: string; qty: number }

/** Words the store must never use (third-party brand names and "replica" language). */
export const forbiddenTerms = ['tipo pandora', 'estilo pandora', 'tipo rolex', 'estilo rolex', 'tipo cartier', 'réplica', 'replica'];

export function findForbidden(text: string): string[] {
  const low = text.toLowerCase();
  return forbiddenTerms.filter((t) => low.includes(t));
}

export function addLine(lines: Line[], id: string, name: string): Line[] {
  return lines.some((l) => l.id === id) ? lines.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)) : [...lines, { id, name, qty: 1 }];
}

export function setQty(lines: Line[], id: string, qty: number): Line[] {
  return qty <= 0 ? lines.filter((l) => l.id !== id) : lines.map((l) => (l.id === id ? { ...l, qty } : l));
}

const HEAD = { en: 'Hello, I would like a quote for these pieces:', es: 'Hola, quisiera una cotización de estas piezas:' };
const FOOT = { en: 'Thank you!', es: '¡Gracias!' };

/** The order list as plain text. It never contains prices: the store quotes by chat. */
export function buildMessage(lines: Line[], lang: Lang): string {
  const body = lines.map((l) => `- ${l.qty} x ${l.name} (${l.id})`).join('\n');
  return `${HEAD[lang]}\n${body}\n${FOOT[lang]}`;
}

/** wa.me link without a phone number: the visitor picks the chat. */
export const whatsappUrl = (text: string): string => `https://wa.me/?text=${encodeURIComponent(text)}`;
