import { CryptoCard } from "./CryptoCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cryptos = ({ cryptos }) => {
  let infoCryptoData;

  return (
    <Row>
      {cryptos.map((crypto) => (
        <Col sm className="pb-2">
          <div key={crypto.CoinInfo.Id}>
            {
              (infoCryptoData = {
                name: crypto.Name,
                price: crypto.PRICE,
                lowday: crypto.LOWDAY,
                highday: crypto.HIGHDAY,
                change24hour: crypto.CHANGE24HOUR,
              })
            }
            <CryptoCard crypto={infoCryptoData} />
          </div>
        </Col>
      ))}
    </Row>
  );
};
