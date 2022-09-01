import CardsList from "../Cards-list/CardsList";
import ExpenseInfoList from "../Expense-info-list/ExpenseInfoList";
import { useState } from "react";
import Card from "../Cards-list/Card/Card";

const App = () => {
  //  initial card list
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

  const [initialCardList, setInitialCardList] = useState(cardList);

  //map each object to a card component
  let newList = initialCardList.map((card) => {
    return (
      <Card
        key={card.id}
        date={card.date}
        title={card.title}
        price={card.price}
      />
    );
  });

  //filter cards by date
  const [filteredList, setFilteredList] = useState(newList);

  function changeListByYear(e) {
    let filterListByYear = cardList
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

    setFilteredList(filterListByYear);
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#4b4b4b",
        width: "700px",
        padding: "30px 0",
        borderRadius: "10px",
        margin: "0 auto",
      }}
    >
      <ExpenseInfoList list={filteredList} />
      <CardsList onAddCard={changeListByYear} />
    </div>
  );
};

export default App;
