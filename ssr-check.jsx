import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from './src/App2.tsx';

const html = renderToStaticMarkup(<App />);
console.log('HTML_LEN', html.length);
console.log('HAS_FOOTER_BIG', /Налоги просто<\/div>/.test(html));
console.log('HAS_H1', /Бухгалтерия и налоги/.test(html));
console.log('HAS_CALC', /Узнайте свою цену/.test(html));
console.log('HAS_TARIFF', /Прозрачная цена без скрытых доплат/.test(html));
console.log('HAS_LOGO', /logo\.webp/.test(html));
