import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Spinner } from "react-bootstrap";

export const CryptoCard = ({ crypto, name }) => {
  const img = "https://www.cryptocompare.com";

  return (
    <div className="mb-2 d-flex justify-content-center">
      {crypto ? (
        <Card style={{ width: "22rem" }} className="shadow-lg">
          <Card.Img variant="top" src={img + crypto.IMAGEURL} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span className="fw-semibold">Price: </span>
              {crypto.PRICE}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-semibold">Highest price today: </span>
              {crypto.HIGHDAY}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-semibold">Lowest price today: </span>
              {crypto.LOWDAY}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="fw-semibold">Last variation 24hs: </span>
              {crypto.CHANGE24HOUR}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ) : (
        <Spinner animation="border" />
      )}
    </div>
  );
};
