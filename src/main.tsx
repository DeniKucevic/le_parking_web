import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "./context";

const client = createClient(
  "https://xqplcuckdjktipxgcpvk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxcGxjdWNrZGprdGlweGdjcHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI3NDM1NjUsImV4cCI6MTk4ODMxOTU2NX0.IJl_-b12tkqx-tp8Wah801cWrzas9y9_8hNaG058QQw"
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
