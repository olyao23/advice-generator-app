import ExpenseInfoList from "./Expense-info-list/ExpenseInfoList";

const AddExpense = () => {
  return (
    <div
      style={{
        backgroundColor: "#a892ee",
        width: "550px",
        borderRadius: "10px",
        padding: "30px",
        marginBottom: "20px",
      }}
    >
      <ExpenseInfoList />
    </div>
  );
};

export default AddExpense;
