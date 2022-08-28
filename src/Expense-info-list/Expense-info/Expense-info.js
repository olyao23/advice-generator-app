const ExpenseInfo = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <label
        style={{
          fontWeight: "bold",
          marginBottom: "7px",
        }}
      >
        {props.title}
      </label>
      <input
        style={{
          padding: "5px",
          borderRadius: "4px",
          border: "transparent",
        }}
        type={props.type}
        onInput={props.onInput}
      />
    </div>
  );
};

export default ExpenseInfo;
