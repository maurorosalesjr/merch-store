import React from "react";
import MerchList from "./MerchList"; 
import MerchDetail from "./MerchDetail";
import NewMerchForm from "./NewMerchForm";
import EditMerchForm from "./EditMerchForm";

class MerchControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMerchList: [],
      selectedMerch: null,
      editing: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({mainMerchList: newMainMerchList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedMerch != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedMerch: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedMerch = (id) => {
    const selectedMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];
    this.setState({selectedMerch: selectedMerch});
  }

  handleDeletingMerch = (id) => {
    const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
    this.setState({
      mainMerchList: newMainMerchList,
      selectedMerch: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingMerchInList = (merchToEdit) => {
    const editedMainMerchList = this.state.mainMerchList
      .filter(merch => merch.id !== this.state.selectedMerch.id)
      .concat(merchToEdit);
    this.setState({
        mainMerchList: editedMainMerchList,
        editing: false,
        selectedMerch: null
      });
  }

  handleSubtractQuantity = (id) => {
    const sellMerch = this.state.mainMerchList.filter(merch => merch.id === id)[0];

    if(sellMerch.quantity > 0) {
      const sold = sellMerch.quantity - 1;
      const soldMerch = {...sellMerch, quantity: sold}
      const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id).concat(soldMerch)
        this.setState({
          mainMerchList: newMainMerchList,
          selectedMerch: null,
                      });
        } else {
          const newMainMerchList = this.state.mainMerchList.filter(merch => merch.id !== id);
            this.setState({
              mainMerchList: newMainMerchList,
              selectedMerch: null
            });
        }
    }
        
      

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing ) {      
      currentlyVisibleState = <EditMerchForm merch = {this.state.selectedMerch}
                                              onEditMerch = {this.handleEditingMerchInList} />
      buttonText = "Return to Merch List";
    } else if (this.state.selectedMerch != null) {
      currentlyVisibleState = <MerchDetail merch = {this.state.selectedMerch} 
                            
                                            onClickingDelete = {this.handleDeletingMerch}
                                            onClickingEdit = {this.handleEditClick}
                                            onClickingSubtractQuantity = {this.handleSubtractQuantity}/>
      buttonText = "Return to Merch List";
      // While our MerchDetail component only takes placeholder data, we will eventually be passing the value of selectedMerch as a prop.
    } else if (this.state.formVisibleOnPage) {
      // This conditional needs to be updated to "else if."
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}  />;
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.state.mainMerchList} onMerchSelection={this.handleChangingSelectedMerch} onClickingSubtractQuantity = {this.handleSubtractQuantity}/>;
      // Because a user will actually be clicking on the merch in the Merch component, we will need to pass our new handleChangingSelectedMerch method as a prop.
      buttonText = "Add Merch";
    }
    const buttonStyle = {
      marginLeft: "5%",
      alignSelf: "center",
      backgroundColor: "burlywood",
      backgroundImage: "none",
      backgroundPosition: "0 90%",
      backgroundRepeat: "repeat no-repeat",
      backgroundSize: "4px 3px",
      borderRadius: "15px 225px 255px 15px 15px 255px 225px 15px",
      borderStyle: "solid",
      borderWidth: "2px",
      boxShadow: "rgba(0, 0, 0, .2) 15px 28px 25px -18px",
      boxSizing: "border-box",
      color: "#41403e",
      cursor: "pointer",
      display: "inline-block",
      fontSize: ".7rem",
      lineHeight: "23px",
      outline: "none",
      padding: ".25rem",
      textDecoration: "none",
      transition: "all 235ms ease-in-out",
      borderBottomLeftRadius: "15px 255px",
      borderBottomRightRadius: "225px 15px",
      borderTopLeftRadius: "255px 15px",
      borderTopRightRadius: "15px 225px",
      userSelect: "none",
      touchAction: "manipulation",
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button style={buttonStyle} onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default MerchControl;
