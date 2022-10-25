import React from "react";
import { Col, Row } from "react-bootstrap";
import { CryptoSelector } from "../components/CryptoSelector";
import { FiatSelector } from "../components/FiatSelector";

export const Home = ({ cryptos }) => {
  
  return (
    <div className="d-flex mt-5">
      <Row>
        <Col>
          <CryptoSelector cryptos={cryptos} />
        </Col>
        <Col>
          <FiatSelector />
        </Col>
      </Row>
    </div>
  );
};
