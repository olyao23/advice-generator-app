import CardsList from "../Cards-list/CardsList";

const App = () => {
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
      <CardsList />
    </div>
  );
};

export default App;
