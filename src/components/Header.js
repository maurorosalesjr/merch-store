import React from "react";

const headerStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  textAlign: "center",
  textDecoration: "underline",
  textDecorationStyle: "double",
  textShadow: "50px",
  fontFamily: "Cursive",
  border: "5px",
  borderStyle: "solid",
  borderColor: "Burlywood",
  backgroundColor: "lightBlue"
}
function Header(){
  return (
    <React.Fragment>
      <h1 style={headerStyle}>Mauro Merch Market</h1>
    </React.Fragment>
  )
}



export default Header;