import React from "react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";

class BusinessControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainBusinessList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formvisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBusinessForm />
      buttonText = "Return to Business List";
    } else {
      currentlyVisibleState = 
      <BusinessList 
        businessList={this.state.mainBusinessList}/>
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