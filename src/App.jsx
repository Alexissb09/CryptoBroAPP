import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import { CryptoLanding } from "./pages/CryptoLanding";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export const getSingleCrypto = (coin) => {};

function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetch(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD`)
      .then((res) => res.json())
      .then((response) => {
        setCryptos(response.Data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home cryptos={cryptos} />} />
          <Route path="cryptos" element={<CryptoLanding cryptos={cryptos} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
