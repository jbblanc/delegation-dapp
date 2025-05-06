import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "./config/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { HeaderBar } from "./components/HeaderBar";
import { Home } from "./components/Home";
import Delegation from "./components/Delegation";
import { client } from "./config/queryClient";

function App() {
  return (
    <StrictMode>
      <WagmiProvider config={config}>
        <QueryClientProvider client={client}>
          <Router>
            <div className="min-h-screen bg-base-100">
              <HeaderBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/delegation" element={<Delegation />} />
              </Routes>
            </div>
          </Router>
        </QueryClientProvider>
      </WagmiProvider>
    </StrictMode>
  );
}

export default App;
