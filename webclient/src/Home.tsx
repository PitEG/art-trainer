import { Container, Card } from "react-bootstrap";
import { OddColorPreview } from "./OddColor/OddColor";
import { Link } from "react-router";

const Home = () => {
  return (
    <Container className="home">
      <h1 className="display-1">GAMES GAMES GAMES</h1>
      <Card>
        <Card.Body>
          <Card.Title>Odd Color</Card.Title>
          <Card.Text>
            Practice your ability to distinguish colors by playing this
            impractical browser game!
          </Card.Text>
          <OddColorPreview />
          <Link to="/oddcolor">
            <a className="btn btn-primary">Play Here!</a>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
