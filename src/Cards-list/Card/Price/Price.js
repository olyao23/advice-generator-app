const Price = (props) => {
  return (
    <span
      style={{
        backgroundColor: "#40005d",
        padding: "8px 18px",
        width: "70px",
        color: "white",
        fontWeight: "bold",
        borderRadius: "9px",
        textAlign: "center",
        border: "1px solid white",
        fontSize: "18px",
        boxShadow: "0.5px 0.5px 1px darkgray",
      }}
    >
      ${props.price}
    </span>
  );
};

export default Price;
