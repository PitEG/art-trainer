import { Container, Card } from "react-bootstrap";
import { OddColorPreview } from "./OddColor/OddColor";

const Home = () => {
  return (
    <Container className="home">
      <h1 className="display-1">GAMES GAMES GAMES</h1>
      <Card>
        <Card.Title>Odd Color</Card.Title>
        <Card.Subtitle>Pick out the odd color!</Card.Subtitle>
        <Card.Text>
          Practice your ability to distinguish colors by playing this
          impractical browser game!
        </Card.Text>
        <OddColorPreview />
        <Card.Link>Play Here!</Card.Link>
      </Card>
    </Container>
  );
};

export default Home;
