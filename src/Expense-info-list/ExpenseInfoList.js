import { useState } from "react";
import Button from "./Button/Button";
import ExpenseInfoListComponents from "./ExpenseInfoListComponents/ExpenseInfoListComponents";

const ExpenseInfoList = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const [clickedCancel, setClickedCancel] = useState(false);

  function addExpense() {}

  //  nez kako da gi stavam site razlichni states kako argumenti
  const expenseInfo = [
    { title: "Title", type: "text", onInput: "setTitle" },
    { title: "Amount", type: "number", onInput: "setAmount" },
    { title: "Date", type: "date", onInput: "setDate" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#a892ee",
        width: "580px",
        borderRadius: "10px",
        padding: "30px",
        marginBottom: "20px",
      }}
    >
      {clickedCancel ? (
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            text="Add New Expense"
            onClick={() => {
              setClickedCancel(false);
            }}
          />
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ExpenseInfoListComponents list={expenseInfo} />
            {/*  da prasham kako da napravam map so ovie 3 components so onInput funkcijata*/}

            {/*  onInput={(userInput) => {*/}
            {/*    setTitle(userInput.target.value);*/}
            {/*    console.log(title);*/}
            {/*  }}*/}

            {/*  onInput={(userInput) => {*/}
            {/*    setAmount(userInput.target.value);*/}
            {/*    console.log(amount);*/}
            {/*  }}*/}

            {/*  onInput={(userInput) => {*/}
            {/*    setDate(userInput.target.value);*/}
            {/*    console.log(date);*/}
            {/*  }}*/}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "250px",
              marginTop: "40px",
            }}
          >
            <Button
              text="Cancel"
              onClick={() => {
                setClickedCancel(true);
              }}
            />
            <Button text="Add Expense" onClick={addExpense} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseInfoList;
