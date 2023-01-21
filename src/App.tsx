import React, { useEffect, useState } from "react";

import { ThemeProvider } from "./theme/theme-provider";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import {
  DashboardPage,
  LandingPage,
  AuthPage,
  NotFoundPage,
  SettingsPage,
} from "./pages";

import { PrivateLayout, PublicLayout } from "./layouts";

import { useClient } from "./hooks";
import { Session } from "@supabase/supabase-js";

import "./App.css";

const App = () => {
  const client = useClient();

  const [isAuthenticated, setIsAuthenticated] = useState<Session | null>(null);

  useEffect(() => {
    client.auth
      .getSession()
      .then((data) => setIsAuthenticated(data.data.session));

    client.auth.onAuthStateChange((_, session) => {
      setIsAuthenticated(session);
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<PublicLayout isAuthenticated={!!isAuthenticated} />}
          >
            <Route index element={<LandingPage />} />
            <Route path="auth" element={<AuthPage />} />
          </Route>

          <Route
            path="/dashboard"
            element={<PrivateLayout isAuthenticated={!!isAuthenticated} />}
          >
            <Route index element={<DashboardPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
