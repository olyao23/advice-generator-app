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
        padding: "10px 20px",
        border: "1px solid white",
        marginRight: "15px",
      }}
    >
      <span
        style={{
          fontSize: "13px",
        }}
      >
        {props.date.dateMonth}
      </span>
      <span
        style={{
          fontSize: "11px",
        }}
      >
        {props.date.dateYear}
      </span>
      <span
        style={{
          fontSize: "20px",
        }}
      >
        {props.date.dateDay}
      </span>
    </div>
  );
};

export default Date;

//da probam posle da go napravam so Date() i funkciite za month, day i year od date
