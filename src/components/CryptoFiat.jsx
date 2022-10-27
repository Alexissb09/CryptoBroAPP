import { useState, useEffect } from "react";

import { getData } from "../utils/getData";
import { CryptoCard } from "./CryptoCard";

export const CryptoCard = ({ crypto, isUsd = true }) => {
  const [info, setInfo] = useState();

  useEffect(() => {
    getData(crypto.CoinInfo.Name).then((res) => setInfo(res));

    return () => {
      getData(crypto.CoinInfo.Name).then((res) => setInfo(res));
    };
  }, [crypto.CoinInfo.Name]);

  const infoCrypto = isUsd ? info?.DISPLAY[`${crypto.CoinInfo.Name}`]?.USD : info?.DISPLAY[`${crypto.CoinInfo.Name}`]?.ARS;
  const infoCryptoData = {
    name: crypto.CoinInfo.Name,
    price: infoCrypto.PRICE,
    lowday: infoCrypto.LOWDAY,
    highday: infoCrypto.HIGHDAY,
    change24hour: infoCrypto.CHANGE24HOUR
  };

  return <CryptoCard crypto={infoCryptoData} />;
};
