import React from "react";
import Header from "./Header";
import MerchControl from "./MerchControl"

const basicStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  
  
}

function App() {
  return (
    <React.Fragment>
      <div style={basicStyle}>
        <Header />
        <MerchControl />
      </div>
    </React.Fragment>
  );
}

export default App;
