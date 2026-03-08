import { Container } from "react-bootstrap";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

const RememberColor = () => {
  const [color, setColor] = useState("#FFFFFF");

  const squareStyle = {
    background: color,
    height: "100px",
  };

  return (
    <Container>
      <h1> HI </h1>
      <h3> Remember The Color! </h3>
      <div>
        <div style={squareStyle}></div>
        <HexColorPicker color={color} onChange={setColor} />
      </div>
    </Container>
  );
};

export default RememberColor;
