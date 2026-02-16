import { Button, Container, Row, Col } from "react-bootstrap";
import "./OddColor.scss";
import { useState } from "react";

// RGB will be between [0.0,1.0]
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
    <Button className="ColorButton" style={styles} onClick={props.action}>
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
  const offset = (x: number, offset: number) =>
    x + (Math.random() * offset - offset / 2);
  const offColor = {
    l: offset(props.color.l, 0.15),
    a: offset(props.color.a, 0.15),
    b: offset(props.color.b, 0.15),
  };
  buttons.splice(
    answer,
    0,
    <ColorButton color={offColor} action={props.onCorrect} />,
  );
  console.log("normal:", props.color);
  console.log("odd:", offColor);

  return (
    <Container>
      <div>{buttons}</div>
    </Container>
  );
};

const OddColor = () => {
  const [score, setScore] = useState(0);
  // select random color
  const randomColor = {
    l: Math.random() * 0.8 + 0.1, // l is between [0.1,0.9]
    a: Math.random() * 2.0 - 1.0, // a is between [-1,1]
    b: Math.random() * 2.0 - 1.0, // b is between [-1,1]
  };

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
      <h2> L:{randomColor.l} </h2>
      <h2> A:{randomColor.a} </h2>
      <h2> B:{randomColor.b} </h2>
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
