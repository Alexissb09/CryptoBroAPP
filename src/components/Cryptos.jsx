import { CryptoCard } from "./CryptoCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cryptos = ({ cryptos }) => {
  return (
    <Row>
      {cryptos.map((crypto) => (
        <Col sm className="mt-5">
          <div key={crypto.CoinInfo.Id}>
            <CryptoCard crypto={crypto} />
          </div>
        </Col>
      ))}
    </Row>
  );
};
