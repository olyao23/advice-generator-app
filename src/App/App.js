import CardsList from "../Cards-list/CardsList";
import AddExpense from "../Add-Expense/AddExpense";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textShadow: "0.5px 0.5px 1px darkgray",
        flexDirection: "column",
        backgroundColor: "#4b4b4b",
        width: "700px",
        padding: "30px 0",
        borderRadius: "10px",
        margin: "0 auto",
      }}
    >
      <AddExpense />
      <CardsList />
    </div>
  );
};

export default App;
