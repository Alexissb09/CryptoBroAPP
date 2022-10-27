import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const CryptoCard = ({ crypto }) => {
  const img = "https://www.cryptocompare.com";

  return (
    <div className="mb-2 d-flex justify-content-center">
      <Card style={{ width: "19rem" }} className="shadow-lg">
        <Card.Img variant="top" src={img + crypto.CoinInfo.ImageUrl} />
        <Card.Body>
          <Card.Title>{crypto.name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span className="fw-semibold">Price: </span>
            {crypto.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Highest price today: </span>
            {crypto.highday}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Lowest price today: </span>
            {crypto.lowday}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Last variation 24hs: </span>
            {crypto.change24hour}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
