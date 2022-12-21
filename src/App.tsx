import React from "react";

import { ThemeProvider } from "./theme/theme-provider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LandingPage, LayoutPage, LoginPage, NotFoundPage } from "./pages";

import { ActionIcon, Center, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
