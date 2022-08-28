const Button = (props) => {
  return (
    <button
      style={{
        borderRadius: "10px",
        padding: "20px 25px",
        fontWeight: "bold",
        color: "white",
        backgroundColor: "#40005d",
        border: "white",
        cursor: "pointer",
      }}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
