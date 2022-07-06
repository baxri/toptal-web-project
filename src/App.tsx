import { StoreContext } from "storeon/react";
import { createStoreon } from "storeon";
import { persistState } from "@storeon/localstorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// import firebase from "./FirebaseConfig";

import Shared from "./shared";

import PrivateRoute from "./routes/PivateRoute";

import LoginScreen from "./screens/login";
import DashboardScreen from "./screens/dashboard";
import TransactionsScreen from "./screens/transactions";
import Screen404 from "./screens/404";

import "./App.css";

import { module as sessionModule, KEY as sessionKey } from "./storeon/session";

const store = createStoreon([sessionModule, persistState([sessionKey])]);

Shared.setStore(store);

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreContext.Provider value={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardScreen />} />
              <Route path="/transactions" element={<TransactionsScreen />} />
            </Route>
            <Route path="*" element={<Screen404 />} />
          </Routes>
        </BrowserRouter>
      </StoreContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
