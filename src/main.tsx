import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createClient } from "@supabase/supabase-js";
import { Provider } from "./context";

const client = createClient(
  import.meta.env.VITE_REACT_APP_SUPABASE_URL ?? "",
  import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY ?? ""
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
