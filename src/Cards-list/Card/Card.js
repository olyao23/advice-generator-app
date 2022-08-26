import Date from "./Date/Date";
import Title from "./Title/Title";
import Price from "./Price/Price";

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "10px 30px",
        backgroundColor: "#4b4b4b",
        borderRadius: "10px",
        margin: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0.5px 0.5px 1px darkgray",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Date date={props.date} />
        <Title title={props.title} />
      </div>
      <div>
        <Price price={props.price} />
      </div>
    </div>
  );
};

export default Card;
