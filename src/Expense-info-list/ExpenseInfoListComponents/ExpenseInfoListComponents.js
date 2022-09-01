import ExpenseInfo from "../Expense-info/Expense-info";

const ExpenseInfoListComponents = (props) => {
  return (
    <>
      {props.list.map((expense) => {
        return (
          <ExpenseInfo
            title={expense.title}
            type={expense.type}
            onInput={expense.onInput}
          />
        );
      })}
    </>
  );
};

export default ExpenseInfoListComponents;
