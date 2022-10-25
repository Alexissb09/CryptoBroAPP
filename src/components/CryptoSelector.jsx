import { useState, useEffect } from "react";
import { CryptoCard } from "./CryptoCard";

export const CryptoSelector = ({ cryptos }) => {
  const [crypto, setCrypto] = useState({});

  const handleChangeCRYPTO = (e) => {
    const newCrypto = cryptos.find((crypto) => {
      return e.target.value == crypto.CoinInfo.Name;
    });
    if (newCrypto) setCrypto(newCrypto);

    console.log(crypto);
  };

  return (
    <div>
      <select className="form-select" onChange={handleChangeCRYPTO}>
        {cryptos.map((crypto) => (
          <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
            {crypto.CoinInfo.Name}
          </option>
        ))}
      </select>
      {/* <CryptoCard crypto={crypto} /> */}
    </div>
  );
};
