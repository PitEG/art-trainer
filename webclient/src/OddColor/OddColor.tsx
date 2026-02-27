import { Button, Container, Accordion } from "react-bootstrap";
import { useState } from "react";
import Grid from "./Grid";
import "./OddColor.scss";

const SOFT_DIFFICULTY_CAP = 30;

interface OddColorProps {
  daily?: true;
}

const OddColor = (props: OddColorProps) => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // select random color
  const randomColor = {
    l: Math.random() * 0.8 + 0.1, // l is between [0.1,0.9]
    a: Math.random() * 1.8 - 0.9, // a is between [-0.8,0.8]
    b: Math.random() * 1.8 - 0.9, // b is between [-0.8,0.8]
  };
  const clamp = (v: number, min: number) => {
    if (v < min) return min;
    return v;
  };
  const difficultyModifier =
    0.05 * clamp(1.1 - score / SOFT_DIFFICULTY_CAP, 0.15);
  const offset = (x: number, offset: number) => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    return x + sign * offset;
  };
  const oddColor = {
    l: offset(randomColor.l, difficultyModifier),
    a: offset(randomColor.a, difficultyModifier),
    b: offset(randomColor.b, difficultyModifier),
  };

  const correct = () => {
    setScore(score + 1);
  };

  const wrong = () => {
    setGameOver(true);
    if (props.daily) {
      console.log("DAILY DONE!");
    }
  };

  const reset = () => {
    setGameOver(false);
    setScore(0);
  };

  const gameOverScreen = (
    <Container className="odd-color-game-over d-flex row justify-content-center">
      <h1>GAME OVER</h1>
      <h2> You scored: {score}!</h2>
      <h2> try again? </h2>
      <Button onClick={reset}>
        <h2>yeah</h2>
      </Button>
    </Container>
  );

  const gameScreen = (
    <Container>
      <Grid
        color={randomColor}
        oddColor={oddColor}
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
      <h2 className="text-center display-1">{score}</h2>
      {gameOver ? gameOverScreen : gameScreen}
    </Container>
  );
};

export const OddColorPreview = () => {
  const color = { l: 0.5, a: -0.12, b: -0.43 };
  const oddColor = { l: 0.68, a: 0.39, b: 0.64 };
  return (
    <Container>
      <Grid
        color={color}
        oddColor={oddColor}
        onCorrect={() => {}}
        onWrong={() => {}}
      />
    </Container>
  );
};

export default OddColor;
