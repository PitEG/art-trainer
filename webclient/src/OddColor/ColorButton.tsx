import { Button } from "react-bootstrap";
import type { Color } from "util/Color";

interface ColorButtonProps {
  color: Color;
  action: () => void;
}

const ColorButton = (props: ColorButtonProps) => {
  const l = props.color.l;
  const a = props.color.a;
  const b = props.color.b;

  const styles = {
    background: `oklab(${l} ${a} ${b})`,
    border: `oklab(${l} ${a} ${b})`,
  };
  return (
    <Button
      className="odd-color-button"
      style={styles}
      onClick={props.action}
    ></Button>
  );
};

export default ColorButton;
