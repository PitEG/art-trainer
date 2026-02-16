import { Button, Container, Row, Col } from "react-bootstrap";
import "./OddColor.scss";
import { useState } from "react";

// RGB will be between [0.0,1.0]
interface ColorButtonProps {
  color: { r: number; g: number; b: number };
  action: () => void;
}

const ColorButton = (props: ColorButtonProps) => {
  const r = props.color.r;
  const g = props.color.g;
  const b = props.color.b;

  const styles = {
    background: `rgb(${r * 255},${g * 255},${b * 255})`,
    border: `rgb(${r * 255},${g * 255},${b * 255})`,
  };
  return (
    <Button className="ColorButton" style={styles} onClick={props.action}>
      <h1>Color Button</h1>
    </Button>
  );
};

interface GridProps {
  color: { r: number; g: number; b: number };
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
  const offset = (x: number, offset: number) =>
    x + (Math.random() * offset - offset / 2);
  const offColor = {
    r: offset(props.color.r, 0.2),
    g: offset(props.color.g, 0.2),
    b: offset(props.color.b, 0.2),
  };
  buttons.splice(
    answer,
    0,
    <ColorButton color={offColor} action={props.onCorrect} />,
  );

  return (
    <Container>
      <div>{buttons}</div>
    </Container>
  );
};

const OddColor = () => {
  const [score, setScore] = useState(0);
  // select random color
  const randomColor = { r: Math.random(), g: Math.random(), b: Math.random() };

  const correct = () => {
    setScore(score + 1);
    console.log("correct");
  };

  const wrong = () => {
    setScore(0);
    console.log("wrong");
  };

  return (
    <Container>
      <h1>Odd Color</h1>
      <h2>{score}</h2>
      <Grid
        color={randomColor}
        difficulty={1}
        onCorrect={correct}
        onWrong={wrong}
      />
    </Container>
  );
};

export default OddColor;
