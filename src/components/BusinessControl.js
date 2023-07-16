import React, { useState } from "react";
import NewBusinessForm from "./NewBusinessForm";
import BusinessList from "./BusinessList";
import BusinessDetail from "./BusinessDetail";
import EditBusinessForm from "./EditBusinessForm";

function BusinessControl() {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formVisibleOnPage: false,
  //     mainBusinessList: [],
  //     selectedBusiness: null,
  //     editing: false
  //   };
  // }
  // yay hooks here we go

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainBusinessList, setMainBusinessList] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedBusiness != null) {
      setFormVisibleOnPage(false);
      setSelectedBusiness(null);
      setEditing(false);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedBusiness: null,
      //   editing: false
      // });
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleAddingNewBusinessToList = (newBusiness) => {
    const newMainBusinessList = mainBusinessList.concat(newBusiness);
    setMainBusinessList(newMainBusinessList);
    setFormVisibleOnPage(false);
    // this.setState({mainBusinessList: newMainBusinessList, formVisibleOnPage: false});
  }

  const handleChangingSelectedBusiness = (id) => {
    // safeguarding against conflict in variable name 'selectedbusiness'
    const selection= mainBusinessList.filter(business => business.id === id)[0];
    setSelectedBusiness(selection);
  }

  const handleDeletingBusiness = (id) => {
    const newMainBusinessList = mainBusinessList.filter(business => business.id !== id);
    setMainBusinessList(newMainBusinessList);
    setSelectedBusiness(null);
    // so much cleaner wow
    // this.setState({
    //   mainBusinessList: newMainBusinessList,
    //   selectedBusiness: null
    // });
  }
  
  const handleEditClick = () => {
    setEditing(true);
    // this.setState({editing: true});
  }

  const handleEditingBusinessInList = (businessToEdit) => {
    const editedMainBusinessList = mainBusinessList
                    .filter(business => business.id !== this.state.selectedBusiness.id)
                    .concat(businessToEdit);
    setMainBusinessList(editedMainBusinessList);
    setEditing(false);
    setSelectedBusiness(null);
    // this.setState({
    //   mainBusinessList: editedMainBusinessList,
    //   editing: false,
    //   selectedBusiness: null
    // });
  }

  let currentlyVisibleState = null;
  let buttonText = null;
    
  if (editing) {
    currentlyVisibleState = 
    <EditBusinessForm 
      business = {selectedBusiness}
      onEditBusiness = {handleEditingBusinessInList} />
    buttonText= "Return to Business List"
  } else if (selectedBusiness != null) {
    currentlyVisibleState = 
    <BusinessDetail
      business = {selectedBusiness}
      onClickingDelete = {handleDeletingBusiness}
      onClickingEdit = {handleEditClick} />
    buttonText = "Return to Business List";
  } else if(formVisibleOnPage) {
    currentlyVisibleState = 
    <NewBusinessForm
      onNewBusinessCreation={handleAddingNewBusinessToList} />
    buttonText = "Return to Business List";
  } else {
    currentlyVisibleState = 
    <BusinessList 
      businessList={mainBusinessList}
      onBusinessSelection={handleChangingSelectedBusiness} />
    buttonText = "Add Business";
  }
  return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}

export default BusinessControl;