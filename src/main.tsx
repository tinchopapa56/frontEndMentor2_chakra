import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import {Ex0, Ex1, Ex2, Ex3, Ex4, Ex5} from "./EX";
import {ChakraProvider} from "@chakra-ui/react"

import theme from "./theme"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex0" element={<Ex0 />} />
          <Route path="/ex1" element={<Ex1 />} />
          <Route path="/ex2" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          <Route path="/ex4" element={<Ex4 />} />
          <Route path="/ex5" element={<Ex5 />} />
        </Routes>
      </ChakraProvider>
  </BrowserRouter>,
);
