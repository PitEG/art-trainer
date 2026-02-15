import { Button, Container, Row, Col } from "react-bootstrap";
import "./OddColor.scss";
import { useState } from "react";

// RGB will be between [0.0,1.0]
interface ColorButtonProps {
  color: { r: number; g: number; b: number };
  action: () => void;
}

const ColorButton = (props: ColorButtonProps) => {
  const action = () => {
    console.log(r, g, b);
  };
  const r = props.color.r;
  const g = props.color.g;
  const b = props.color.b;

  const styles = {
    background: `rgb(${r * 255},${g * 255},${b * 255})`,
    border: `rgb(${r * 255},${g * 255},${b * 255})`,
  };
  return (
    <Button className="ColorButton" style={styles} onClick={action}>
      <h1>Color Button</h1>
    </Button>
  );
};

interface GridProps {
  color: { r: number; g: number; b: number };
  difficulty: number;
}

const Grid = (props: GridProps) => {
  return (
    <Container>
      <Row>
        <Col>{buttons[0]}</Col>
        <Col>{buttons[1]}</Col>
        <Col>{buttons[2]}</Col>
      </Row>
      <Row>
        <Col>{buttons[3]}</Col>
        <Col>{buttons[4]}</Col>
        <Col>{buttons[5]}</Col>
      </Row>
      <Row>
        <Col>{buttons[6]}</Col>
        <Col>{buttons[7]}</Col>
        <Col>{buttons[8]}</Col>
      </Row>
    </Container>
  );
};

const OddColor = () => {
  const randomizeButtons = (buttons: any[]) => {
    let newButtons = Array.from({ length: buttons.length }, () => {
      <ColorButton
        color={{ r: 0.5, g: 0.5, b: 0.5 }}
        action={randomizeButtons}
      />;
      return newButtons;
    });
  };

  const [buttons, setButtons] = useState(newButtons);

  const randomizeOddColor = () => {
    let buttonsCopy = [...buttons];
    let answer = Math.floor(Math.random() * 9);
    buttonsCopy[answer] = <ColorButton color={{ r: 0.9, g: 0.2, b: 0.5 }} />;
    setButtons(buttonsCopy);
  };

  // randomize one color

  return (
    <Container>
      <h1>Odd Color</h1>
      <Grid color={{ r: 0.9, g: 0.2, b: 0.5 }} difficulty={1} />
    </Container>
  );
};

export default OddColor;
