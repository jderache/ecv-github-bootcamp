import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet } from 'spectacle';
import mdContent from './slides.md';

const theme = {
  colors: {
    primary: '#475569',
    secondary: '#3C4A61',
    tertiary: '#DDDDDD',
    quaternary: '#2563eb',
    quinary: '#000'
  },
};

const Presentation = () => (
  <Deck template={<DefaultTemplate color='#000000' />} theme={theme}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
);

createRoot(document.getElementById('app')!).render(<Presentation />);