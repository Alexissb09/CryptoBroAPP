import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const CryptoCardTop = ({ crypto }) => {
  const img = "https://www.cryptocompare.com";

  return (
    <div className="mb-2 d-flex justify-content-center">
      <Card style={{ width: "19rem" }} className="shadow-lg">
        <Card.Img variant="top" src={img + crypto.CoinInfo.ImageUrl} />
        <Card.Body>
          <Card.Title>{crypto.CoinInfo.FullName}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <span className="fw-semibold">Price: </span>
            {crypto.DISPLAY.USD.PRICE}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Highest price today: </span>
            {crypto.DISPLAY.USD.HIGHDAY}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Lowest price today: </span>
            {crypto.DISPLAY.USD.LOWDAY}
          </ListGroup.Item>
          <ListGroup.Item>
            <span className="fw-semibold">Last variation 24hs: </span>
            {crypto.DISPLAY.USD.CHANGE24HOUR}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};
