import React from "react";

function Event({ itemName, logo, startTime, location, min }) {
  const eventStyle = {
    display: "flex",
    padding: "15px 0",
    borderBottom: "1px solid #ebeef1",
  };

  const imgContainerStyle = {
    flex: 1,
    marginRight: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const imageStyle = {
    maxHeight: "100px",
  };

  const infoContainerStyle = {
    flex: 5,
    marginRight: "25px",
  };

  const buttonContainerStyle = {
    flex: 2,
    display: "flex",
    alignItems: "center",
  };

  const buttonStyle = {
    borderRadius: "6px",
    backgroundColor: "#ab1c20",
    padding: "10px",
    width: "225px",
    border: 0,
    color: "white",
  };

  return (
    <div style={eventStyle}>
      <div style={imgContainerStyle}>
        <img style={imageStyle} src={logo} alt={itemName} />
      </div>
      <div style={infoContainerStyle}>
        <h2>{itemName}</h2>
        <p>{startTime}</p>
        <p>{location}</p>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>{`Buy Now - $${min}+`}</button>
      </div>
    </div>
  );
}

function App() {
  // inline styles
  const containerStyle = {
    display: "flex",
    padding: "15px",
    backgroundColor: "#f3f4f8",
  };

  const componentStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    borderColor: "#e9edf0",
    padding: "15px",
  };

  const filtersStyle = {
    flex: 1,
    marginRight: "25px",
  };

  const eventsStyle = {
    flex: 4,
  };

  return (
    <div id="app" style={containerStyle}>
      <div style={{ ...componentStyle, ...filtersStyle }} />
      <div style={{ ...componentStyle, ...eventsStyle }} />
    </div>
  );
}

export default App;
