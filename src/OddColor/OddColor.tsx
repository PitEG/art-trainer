import { Button, Container } from "react-bootstrap";
import "./OddColor.scss";
import { useState } from "react";

interface ColorButtonProps {
  color: { l: number; a: number; b: number };
  action: () => void;
}

const ColorButton = (props: ColorButtonProps) => {
  const l = props.color.l;
  const a = props.color.a;
  const b = props.color.b;

  const styles = {
    background: `lab(${l * 100.0} ${a * 100.0} ${b * 100.0})`,
    border: `lab(${l * 100.0} ${a * 100.0} ${b * 100.0})`,
  };
  return (
    <Button className="odd-color-button" style={styles} onClick={props.action}>
      <h1>Color Button</h1>
    </Button>
  );
};

interface GridProps {
  color: { l: number; a: number; b: number };
  difficulty: number;
  onCorrect: () => void;
  onWrong: () => void;
}

const Grid = (props: GridProps) => {
  // make 8 regular buttons
  const buttons = Array.from({ length: 8 }, () => (
    <ColorButton color={props.color} action={props.onWrong} />
  ));

  // insert 1 odd button
  const answer = Math.floor(Math.random() * 9);
  const offset = (x: number, offset: number) => {
    const sign = Math.random() > 0.5 ? 1 : -1;
    return x + sign * offset;
  };
  const offColor = {
    l: offset(props.color.l, 0.05),
    a: offset(props.color.a, 0.05),
    b: offset(props.color.b, 0.05),
  };
  buttons.splice(
    answer,
    0,
    <ColorButton color={offColor} action={props.onCorrect} />,
  );
  console.log("normal:", props.color);
  console.log("odd:", offColor);

  return (
    <Container className="odd-color-grid justify-content-center">
      {buttons}
    </Container>
  );
};

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
