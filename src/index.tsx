import React from 'react';
import './index.css';
import App from './app/App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from './theme';
import { StrictMode } from "react"
import { render } from "react-dom"


render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
