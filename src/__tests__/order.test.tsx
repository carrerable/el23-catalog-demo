import { render, screen, fireEvent } from '@testing-library/react';
import { PIECES } from '../data/pieces';
import { addLine, buildMessage, findForbidden, forbiddenTerms, setQty, whatsappUrl } from '../lib/order';
import { Demo } from '../Demo';

test('mensaje armado sin precios y con enlace wa.me sin numero', () => {
  let lines = addLine([], 'P-01', 'Twisted band ring');
  lines = addLine(lines, 'P-01', 'Twisted band ring');
  lines = addLine(lines, 'P-09', 'Moon charm');
  const msg = buildMessage(lines, 'en');
  expect(msg).toContain('- 2 x Twisted band ring (P-01)');
  expect(msg).toContain('- 1 x Moon charm (P-09)');
  expect(msg).not.toMatch(/[$]|price|precio/i);
  const url = whatsappUrl(msg);
  expect(url.startsWith('https://wa.me/?text=')).toBe(true);
  expect(decodeURIComponent(url.slice('https://wa.me/?text='.length))).toBe(msg);
  expect(setQty(lines, 'P-09', 0)).toHaveLength(1);
});

test('deteccion de termino prohibido', () => {
  expect(findForbidden('Un anillo TIPO Pandora')).toEqual(['tipo pandora']);
  expect(findForbidden('una réplica')).toContain('réplica');
  expect(findForbidden('Twisted band ring')).toEqual([]);
});

test('ninguna pieza del catalogo usa un termino prohibido', () => {
  expect(PIECES).toHaveLength(12);
  for (const p of PIECES) expect(findForbidden(`${p.name.en} ${p.name.es}`)).toEqual([]);
  expect(forbiddenTerms).toHaveLength(7);
});

test('la interfaz agrega piezas y arma el mensaje', () => {
  render(<Demo lang="es" />);
  fireEvent.click(screen.getByRole('button', { name: /Agregar a la lista: Anillo trenzado/ }));
  expect(screen.getByTestId('message')).toHaveTextContent('1 x Anillo trenzado (P-01)');
  expect(screen.getAllByText('Precio bajo pedido')).toHaveLength(12);
});
