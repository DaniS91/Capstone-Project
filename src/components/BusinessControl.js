import React from "react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";
import EditBusinessForm from "./EditBusinessForm";

class BusinessControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBusinessList: [],
      selectedBusiness: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedBusiness != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedBusiness: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditClick = () => {
    console.log("we have an editing click");
    this.setState({editing: true});
  }

  handleAddingNewBusinessToList = (newBusiness) => {
    const newMainBusinessList = this.state.mainBusinessList.concat(newBusiness);
    this.setState({mainBusinessList: newMainBusinessList, formVisibleOnPage: false});
  }

  handlechangingSelectedBusiness = (id) => {
    const selectedBusiness = this.state.mainBusinessList.filter(business => business.id === id)[0];
    this.setState({selectedBusiness: selectedBusiness});
  }

  handleDeletingBusiness = (id) => {
    const newMainBusinessList = this.state.mainBusinessList.filter(business => business.id !== id);
    this.setState({
      mainBusinessList: newMainBusinessList,
      selectedBusiness: null
    });
  }

  handleEditingBusinessInList = (businessToEdit) => {
    const editedMainBusinessList = this.state.mainBusinessList
                    .filter(business => business.id !== this.state.selectedBusiness.id)
                    .concat(businessToEdit);
    this.setState({
      mainBusinessList: editedMainBusinessList,
      editing: false,
      selectedBusiness: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = 
      <EditBusinessForm 
        business = {this.state.selectedBusiness}
        onEditBusiness = {this.handleEditingBusinessInList} />
      buttonText= "Return to Business List"
    } else if (this.state.selectedBusiness != null) {
      currentlyVisibleState = 
      <BusinessDetail
        business = {this.state.selectedBusiness}
        onClickingDelete = {this.handleDeletingBusiness}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Business List";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBusinessForm />
      buttonText = "Return to Business List";
    } else {
      currentlyVisibleState = 
      <BusinessList 
        businessList={this.state.mainBusinessList}
        onBusinessSelection={this.handlechangingSelectedBusiness} />
      buttonText = "Add Business";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default BusinessControl;