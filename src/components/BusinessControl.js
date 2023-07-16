import React from "react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";

class BusinessControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBusinessList: [],
      selectedBusiness: null
    };
  }

  handleClick = () => {
    if (this.state.selectedBusiness != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
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

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedBusiness != null) {
      currentlyVisibleState = 
      <BusinessDetail
        business = {this.state.selectedBusiness}
        onClickingDelete = {this.handleDeletingBusiness} />
      buttonText = "Return to Business List";
    } else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBusinessForm />
      buttonText = "Return to Business List";
    } else {
      currentlyVisibleState = 
      <BusinessList 
        businessList={this.state.mainBusinessList}
        onTicketSelection={this.handlechangingSelectedBusiness} />
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