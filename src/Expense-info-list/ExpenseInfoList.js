import ExpenseInfo from "./Expense-info/Expense-info";
import { useState } from "react";
import Button from "./Button/Button";

const ExpenseInfoList = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const [clickedCancel, setClickedCancel] = useState(false);

  //it takes the already existing list and adds another card with the given above data
  function addExpense() {
    let newList = props.list;
  }

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
            <ExpenseInfo
              title="Title"
              type="text"
              onInput={(userInput) => {
                setTitle(userInput.target.value);
                console.log(title);
              }}
            />
            <ExpenseInfo
              title="Amount"
              type="number"
              onInput={(userInput) => {
                setAmount(userInput.target.value);
                console.log(amount);
              }}
            />
            <ExpenseInfo
              title="Date"
              type="date"
              onInput={(userInput) => {
                setDate(userInput.target.value);
                console.log(date);
              }}
            />
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
