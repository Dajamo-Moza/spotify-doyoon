import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import baseTheme from './styles/baseTheme';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={baseTheme}></ThemeProvider>
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<RootWithCallbackAfterRender />);
