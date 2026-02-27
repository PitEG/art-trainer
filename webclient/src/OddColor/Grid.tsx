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
  const answer = Math.floor(Math.random() * 9);
  // make buttons
  const buttons = Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8], (idx: number) => {
    if (idx != answer) {
      return (
        <ColorButton color={props.color} action={props.onWrong} key={idx} />
      );
    } else {
      return (
        <ColorButton
          color={props.oddColor}
          action={props.onCorrect}
          key={idx}
        />
      );
    }
  });

  return (
    <Container className="odd-color-grid justify-content-center">
      {buttons}
    </Container>
  );
};

export default Grid;
