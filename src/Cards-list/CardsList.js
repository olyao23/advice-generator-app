const CardsList = (props) => {
  let optionValues = ["2019", "2020", "2021", "2022"];

  let optionValuesList = optionValues.map((year) => {
    return (
      <option
        value=""
        style={{
          fontWeight: "bold",
          borderRadius: "5px",
        }}
      >
        {year}
      </option>
    );
  });

  return (
    <div>
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
          <h4 style={{ fontWeight: "bold", color: "white" }}>Filter by year</h4>
          <div>
            <select
              style={{
                padding: "7px 25px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
              onInput={props.onClick}
            >
              {optionValuesList}
            </select>
          </div>
        </div>

        {/*{filteredList.length === 0 ? (*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      textAlign: "center",*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Title title="Found no expenses" />*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  filteredList*/}
        {/*)}*/}
      </div>
    </div>
  );
};

export default CardsList;
