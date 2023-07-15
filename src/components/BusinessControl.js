import React from "react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";

class BusinessControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  render(){
    let currentlyVisibleState = null;
    let addBusinessButton = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewBusinessForm />
    } else {
      currentlyVisibleState = <BusinessList />
      addBusinessButton = <button onClick={this.handleClick}>Add business</button>
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {addBusinessButton}
      </React.Fragment>
    )
  }
}

export default BusinessControl;