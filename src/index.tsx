import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { RecoilRoot } from 'recoil';
import baseTheme from './styles/baseTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
