import { Container } from "react-bootstrap";
import ColorButton from "./ColorButton";

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

export default Grid;
