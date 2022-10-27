import { useState } from "react";
import { CryptoFiat } from "./CryptoFiat";

export const CryptoSelector = ({ cryptos }) => {
  const [crypto, setCrypto] = useState();
  const [isUsd, setIsUsd] = useState(true);

  const handleChangeCRYPTO = (e) => {
    const findCrypto = cryptos.find((crypto) => {
      return e.target.value == crypto.CoinInfo.Name;
    });
    if (findCrypto) setCrypto(findCrypto);
  };

  const handleChangeFIAT = (e) => {
    e.target.value == "USD" ? setIsUsd(true) : setIsUsd(false);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center mb-3">
        <select className="form-select me-2" onChange={handleChangeCRYPTO}>
          {cryptos.map((crypto) => (
            <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.Name}
            </option>
          ))}
        </select>
        <select className="form-select ms-2" onChange={handleChangeFIAT}>
          <option value={"USD"}>USD</option>
          <option value={"ARS"}>ARS</option>
        </select>
      </div>
      <div>{crypto ? <CryptoFiat crypto={crypto} isUsd={isUsd} /> : <p>Pick a crypto to see its details</p>}</div>
    </div>
  );
};
