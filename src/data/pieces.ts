export type Category = 'ring' | 'chain' | 'bracelet' | 'earrings' | 'charm' | 'necklace';
export interface Piece { id: string; category: Category; name: { en: string; es: string }; size: string }

// 12 fictional pieces. Prices are never shown: "Price on request".
export const PIECES: Piece[] = [
  { id: 'P-01', category: 'ring', name: { en: 'Twisted band ring', es: 'Anillo trenzado' }, size: 'sizes 6-10' },
  { id: 'P-02', category: 'ring', name: { en: 'Signet ring, flat top', es: 'Anillo sello, cara plana' }, size: 'sizes 7-12' },
  { id: 'P-03', category: 'chain', name: { en: 'Curb chain 50 cm', es: 'Cadena barbada 50 cm' }, size: '50 cm / 3 mm' },
  { id: 'P-04', category: 'chain', name: { en: 'Rope chain 60 cm', es: 'Cadena cuerda 60 cm' }, size: '60 cm / 2.5 mm' },
  { id: 'P-05', category: 'bracelet', name: { en: 'Link bracelet', es: 'Pulsera de eslabones' }, size: '19 cm' },
  { id: 'P-06', category: 'bracelet', name: { en: 'Cuff bracelet, open', es: 'Brazalete abierto' }, size: 'adjustable' },
  { id: 'P-07', category: 'earrings', name: { en: 'Hoop earrings, small', es: 'Aretes de aro chicos' }, size: '15 mm' },
  { id: 'P-08', category: 'earrings', name: { en: 'Drop earrings', es: 'Aretes colgantes' }, size: '30 mm' },
  { id: 'P-09', category: 'charm', name: { en: 'Moon charm', es: 'Dije de luna' }, size: '14 mm' },
  { id: 'P-10', category: 'charm', name: { en: 'Star charm', es: 'Dije de estrella' }, size: '12 mm' },
  { id: 'P-11', category: 'necklace', name: { en: 'Pendant necklace, round', es: 'Collar con medalla redonda' }, size: '45 cm' },
  { id: 'P-12', category: 'necklace', name: { en: 'Choker, thin', es: 'Gargantilla delgada' }, size: '38 cm' },
];
