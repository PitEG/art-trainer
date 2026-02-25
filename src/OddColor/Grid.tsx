import { Container } from "react-bootstrap";
import ColorButton from "./ColorButton";

interface Color {
  l: number;
  a: number;
  b: number;
}

interface GridProps {
  color: Color;
  oddColor: Color;
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
  buttons.splice(
    answer,
    0,
    <ColorButton color={props.oddColor} action={props.onCorrect} />,
  );
  console.log("normal:", props.color);
  console.log("odd:", props.oddColor);

  return (
    <Container className="odd-color-grid justify-content-center">
      {buttons}
    </Container>
  );
};

export default Grid;
