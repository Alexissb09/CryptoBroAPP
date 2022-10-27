import { CryptoCardTop } from "./CryptoCardTop";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Cryptos = ({ cryptos }) => {
  return (
    <Row>
      {cryptos.map((crypto) => (
        <Col sm className="pb-2">
          <div key={crypto.CoinInfo.Id}>
            <CryptoCardTop crypto={crypto} />
          </div>
        </Col>
      ))}
    </Row>
  );
};
