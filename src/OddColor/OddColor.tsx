import { Button, Container, Accordion } from "react-bootstrap";
import { useState } from "react";
import Grid from "./Grid";
import "./OddColor.scss";

const OddColor = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // select random color
  const randomColor = {
    l: Math.random() * 0.8 + 0.1, // l is between [0.1,0.9]
    a: Math.random() * 1.8 - 0.9, // a is between [-0.8,0.8]
    b: Math.random() * 1.8 - 0.9, // b is between [-0.8,0.8]
  };
  const offset = (x: number, offset: number) => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    return x + sign * offset;
  };
  const oddColor = {
    l: offset(randomColor.l, 0.05),
    a: offset(randomColor.a, 0.05),
    b: offset(randomColor.b, 0.05),
  };

  const correct = () => {
    setScore(score + 1);
    console.log("correct");
  };

  const wrong = () => {
    setGameOver(true);
    console.log("wrong");
  };

  const reset = () => {
    setGameOver(false);
    setScore(0);
  };

  const gameOverScreen = (
    <Container className="odd-color-game-over d-flex row justify-content-center">
      <h1>GAME OVER, MAN</h1>
      <h2> You scored: {score}!</h2>
      <h2> try again? </h2>
      <Button onClick={reset}>
        <h2>yeah</h2>
      </Button>
    </Container>
  );

  const gameScreen = (
    <Container>
      <h2 className="text-center display-1">{score}</h2>
      <Grid
        color={randomColor}
        oddColor={oddColor}
        difficulty={1}
        onCorrect={correct}
        onWrong={wrong}
      />
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header> DEBUG </Accordion.Header>
          <Accordion.Body>
            <h3> color </h3>
            <p> L:{randomColor.l} </p>
            <p> A:{randomColor.a} </p>
            <p> B:{randomColor.b} </p>
            <h3> odd color </h3>
            <p> L:{oddColor.l} </p>
            <p> A:{oddColor.a} </p>
            <p> B:{oddColor.b} </p>
            <h3> diff </h3>
            <p> L:{oddColor.l - randomColor.l} </p>
            <p> A:{oddColor.a - randomColor.a} </p>
            <p> B:{oddColor.b - randomColor.b} </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );

  return (
    <Container className="odd-color min-vh-100">
      <h1>Odd Color</h1>
      {gameOver ? gameOverScreen : gameScreen}
    </Container>
  );
};

export default OddColor;
