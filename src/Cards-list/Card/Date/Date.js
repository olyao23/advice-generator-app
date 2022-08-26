const Date = (props) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(31, 31, 31)",
        color: "white",
        borderRadius: "7px",
        padding: "10px 15px",
        border: "1px solid white",
        marginRight: "15px",
      }}
    >
      <span>{props.date.dateMonth}</span>
      <span>{props.date.dateYear}</span>
      <span>{props.date.dateDay}</span>
    </div>
  );
};

export default Date;

//da probam posle da go napravam so Date() i funkciite za month, day i year od date
