import Card from "./Card/Card";
import Title from "./Card/Title/Title";
import { useState } from "react";

const CardsList = () => {
  const [year, setYear] = useState("2020");

  return (
    <div
      style={{
        backgroundColor: "rgb(31, 31, 31)",
        padding: "10px",
        width: "600px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0.5px 0.5px 1px darkgray",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 10px",
        }}
      >
        <Title title="Filter by year" />
        <div>
          <select
            style={{
              padding: "7px 25px",
              fontWeight: "bold",
              borderRadius: "5px",
            }}
            onInput={(e) => {
              setYear(e.target.value);
            }}
          >
            <option
              style={{
                padding: "7px 25px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2020"
            >
              2020
            </option>
            <option
              style={{
                padding: "7px 25px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2021"
            >
              2021
            </option>
            <option
              style={{
                padding: "7px 25px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2022"
            >
              2022
            </option>
            <option
              style={{
                padding: "7px 25px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2023"
            >
              2023
            </option>
          </select>
        </div>
      </div>
      <Card
        date={{
          dateMonth: "August",
          dateYear: "2020",
          dateDay: "14",
        }}
        title="Toilet Paper"
        price="94.12"
      />
      <Card
        date={{
          dateMonth: "March",
          dateYear: "2021",
          dateDay: "12",
        }}
        title="New TV"
        price="799.49"
      />
      <Card
        date={{
          dateMonth: "March",
          dateYear: "2021",
          dateDay: "28",
        }}
        title="Car Insurance"
        price="294.67"
      />
      <Card
        date={{
          dateMonth: "June",
          dateYear: "2021",
          dateDay: "28",
        }}
        title="New Desk (Wooden)"
        price="450"
      />
    </div>
  );
};

export default CardsList;
