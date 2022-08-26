import Card from "./Card/Card";
import Title from "./Card/Title/Title";
import { useState } from "react";

const CardsList = () => {
  //  initial list of cards
  const cardList = [
    {
      id: 1,
      date: {
        dateMonth: "August",
        dateYear: "2020",
        dateDay: "14",
      },
      title: "Toilet Paper",
      price: "94.12",
    },
    {
      id: 2,
      date: {
        dateMonth: "March",
        dateYear: "2021",
        dateDay: "12",
      },
      title: "New TV",
      price: "799.49",
    },
    {
      id: 3,
      date: {
        dateMonth: "March",
        dateYear: "2021",
        dateDay: "28",
      },
      title: "Car Insurance",
      price: "294.67",
    },
    {
      id: 4,
      date: {
        dateMonth: "June",
        dateYear: "2021",
        dateDay: "28",
      },
      title: "New Desk (Wooden)",
      price: "450",
    },
  ];

  //with map, map every element in the array with a card component
  let newList;

  {
    newList = cardList.map((card) => {
      return (
        <Card
          key={card.id}
          date={card.date}
          title={card.title}
          price={card.price}
        />
      );
    });
  }

  //filtering the cards by year
  const [filteredList, setFilteredList] = useState(newList);

  function changeListByYear(e) {
    let filterListByYear;
    {
      filterListByYear = cardList
        .filter((card) => card.date.dateYear === e.target.value)
        .map((currentCard) => {
          return (
            <Card
              key={currentCard.id}
              date={currentCard.date}
              title={currentCard.title}
              price={currentCard.price}
            />
          );
        });
    }
    setFilteredList(filterListByYear);
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(31, 31, 31)",
        padding: "20px",
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
            onInput={changeListByYear}
          >
            <option
              style={{
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2020"
            >
              2020
            </option>
            <option
              style={{
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2021"
            >
              2021
            </option>
            <option
              style={{
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              value="2022"
            >
              2022
            </option>
            <option
              style={{
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
      {filteredList}
    </div>
  );
};

export default CardsList;
