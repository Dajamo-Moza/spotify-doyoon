import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import baseTheme from './styles/baseTheme';
import Main from './pages/Main';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.StrictMode>
      <ThemeProvider theme={baseTheme}>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </ThemeProvider>
    </React.StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootWithCallbackAfterRender />);
