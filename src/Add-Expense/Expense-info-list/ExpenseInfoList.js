import ExpenseInfo from "./Expense-info/Expense-info";
import { useState } from "react";

const ExpenseList = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  return (
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

      <button
        style={{
          borderRadius: "8px",
          padding: "13px 17px",
          fontWeight: "bold",
          color: "white",
          backgroundColor: "#40005d",
          border: "white",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={() => {
          console.log(title, amount, date);
        }}
      >
        Add Expense
      </button>
    </div>
  );
};

export default ExpenseList;
