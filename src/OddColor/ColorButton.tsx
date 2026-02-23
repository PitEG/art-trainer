import { Button } from "react-bootstrap";

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

export default ColorButton;
