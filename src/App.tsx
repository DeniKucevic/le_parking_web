import React from "react";

import { ThemeProvider } from "./theme/theme-provider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LandingPage, LoginPage, NotFoundPage } from "./pages";

import { PrivateLayout, PublicLayout } from "./layouts";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route path="/dashboard" element={<PrivateLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
