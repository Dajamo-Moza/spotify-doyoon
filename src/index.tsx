import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import baseTheme from './styles/baseTheme';
import GlobalStyles from './styles/globalStyles';
import Main from './pages/Main';

function RootWithCallbackAfterRender() {
  useEffect(() => {
    console.log('rendered');
  });

  return (
    <React.Fragment>
      <GlobalStyles />
      <ThemeProvider theme={baseTheme}>
        <RecoilRoot>
          <Main />
        </RecoilRoot>
      </ThemeProvider>
    </React.Fragment>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RootWithCallbackAfterRender />);

if (module.hot) {
  module.hot.accept();
}
