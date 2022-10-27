import { Col, Row } from "react-bootstrap";
import { CryptoSelector } from "../components/CryptoSelector";

export const Home = ({ cryptos }) => {
  return (
    <div className="d-flex">
      <Row>
        <Col>
          <CryptoSelector cryptos={cryptos} />
        </Col>
      </Row>
    </div>
  );
};
