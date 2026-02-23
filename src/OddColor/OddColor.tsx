import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import Grid from "./Grid";

const OddColor = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  // select random color
  const randomColor = {
    l: Math.random() * 0.8 + 0.1, // l is between [0.1,0.9]
    a: Math.random() * 1.8 - 0.9, // a is between [-0.8,0.8]
    b: Math.random() * 1.8 - 0.9, // b is between [-0.8,0.8]
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
    <div className="odd-color-game-over d-flex row justify-content-center">
      <h1>GAME OVER, MAN</h1>
      <h3> try again? </h3>
      <Button onClick={reset}> yeah </Button>
    </div>
  );

  const gameScreen = (
    <div>
      <Grid
        color={randomColor}
        difficulty={1}
        onCorrect={correct}
        onWrong={wrong}
      />
      <h1> DEBUG </h1>
      <h2> L:{randomColor.l} </h2>
      <h2> A:{randomColor.a} </h2>
      <h2> B:{randomColor.b} </h2>
    </div>
  );

  return (
    <Container>
      <h1>Odd Color</h1>
      <h2>{score}</h2>
      {gameOver ? gameOverScreen : gameScreen}
    </Container>
  );
};

export default OddColor;
