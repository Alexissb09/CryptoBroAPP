import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <div className="ms-2">
        <Navbar.Brand>
          <img alt="logo" src="https://www.cryptocompare.com/media/37746251/btc.png" width="30" height="30" className="d-inline-block align-top" /> CryptoBro APP
        </Navbar.Brand>
      </div>
      <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="cryptos" className="nav-link">
            Cryptos
          </Link>
      </Nav>
    </Navbar>
  );
};
