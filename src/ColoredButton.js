import "./ColoredButton.css";

const ColoredButton = ({ color, addCircle }) => {
  return (
    <button
      onClick={() => addCircle(color)}
      className="ColoredButton"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default ColoredButton;
