export const CryptoSelector = ({ cryptos }) => {
  return (
        <select className="form-select">
          {cryptos.map((crypto) => (
            <option key={crypto.CoinInfo.Id} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.Name}
            </option>
          ))}
        </select>
  );
};
