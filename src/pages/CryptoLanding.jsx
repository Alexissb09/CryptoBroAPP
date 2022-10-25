import { Cryptos } from "../components/Cryptos";

export const CryptoLanding = ({ cryptos }) => {
  return (
    <div>
      <Cryptos cryptos={cryptos} />
    </div>
  );
};
