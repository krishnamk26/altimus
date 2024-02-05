import React, { useState } from "react";
import SidePanel from "./SidePanel";
import Shipment from "./Shipment";
import AddresInfo from "./AddresInfo";
import DeliveryType from "./DeliveryType";
import PaymentMethod from "./PaymentMethod";
import { Grid } from "@mui/material";
import Box from "@mui/system/Box";

function Content() {
  const firstCard = "Delivery";
  const secondCard = "Collect From Store";
  const [expanded, setExpanded] = useState(false);
  const [selectedCard, setSelectedCard] = useState("card1"); 
  const [buttonText, setButtonText] = useState("Change");
  const [showFirstButton, setShowFirstButton] = useState(true);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [newAddress, setNewAddress] = useState(false)
  const [isSaveClick, setSaveClick] = useState (false)
  const [isEditClick, setEditClick] = useState(false)
  const [isCancelClick, setCancelClick] = useState(false)
  const [checked, setChecked] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    phonenumber: "",
    findaddress: "",
    country: "",
    address1: "",
    address2: "",
    address3: "",
    town: "",
    state: "",
    postalcode: "",
  }); // form data

  const handleChangeForm = (e) =>{
    // setInputs((prevState)=>({
    //   ...prevState,
    //   [e.target.name] : e.target.value}))
    const {name, value} = e.target
      setInputs({
        ...inputs,
        [name]: value
      })
      
    
  } // address form data 

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    console.log(inputs)
    console.log(inputs.name)
  } // address form submit 

  const handleSaveClick = () =>{
    setSaveClick(true)
  } // form save button

  const handleChanged = (event) => {
    setChecked(event.target.checked);
  }; // address form radiobutton

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  }; // Accordion expand function

  const handleButtonClick = () => {
    setButtonText((prevButtonText) =>
      prevButtonText === "Change" ? "Continue" : "Change"
    );
    {
      setShowFirstButton(false)
        ? showFirstButton(false)
        : setShowFirstButton(true);
    }
    // choose shipment method button function
  };

  const handleButtonClicked = () => {
    setButtonClicked(true);
  }; // address information change button

  const handleEditClicked=()=>{
    setEditClick(true)
  }

  const handleCardClick = (cardid) => {
    setSelectedCard(cardid);
  }; // choose shipment card function 

  const handleNewAddress = () =>{
    setNewAddress(true)
  } // address form button (+new address)
  
  const handleCancelClick = () =>{
    setCancelClick(true)
  } // address Form cancel button
  return (
    <Grid container sx={{padding:"40px 60px",minHeight:"100vh",backgroundColor:"rgb(241, 243, 246)"}}>
      <Grid  item xs={8}   >
        <Box >
          <Shipment
            handleChange={handleChange}
            expanded={expanded}
            buttonText={buttonText}
            setButtonText={setButtonText}
            showFirstButton={showFirstButton}
            // showFirstButtonTrue={showFirstButtonTrue}
            setShowFirstButton={setShowFirstButton}
            handleButtonClick={handleButtonClick}
            firstCard={firstCard}
            secondCard={secondCard}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
          />

          <AddresInfo
            handleChange={handleChange}
            expanded={expanded}
            handleButtonClick={handleButtonClick}
            buttonText={buttonText}
            handleSubmitForm={handleSubmitForm}
            inputs={inputs}
            handleChangeForm={handleChangeForm}
            newAddress={newAddress}
            handleNewAddress={handleNewAddress}
            handleSaveClick={handleSaveClick}
            isSaveClick={isSaveClick}
            isButtonClicked={isButtonClicked}
            setButtonClicked={setButtonClicked}
            checked={checked}
            handleChanged={handleChanged}
            handleButtonClicked={handleButtonClicked}
            handleEditClicked={handleEditClicked}
            isEditClick={isEditClick}
            isCancelClick={isCancelClick}
            handleCancelClick={handleCancelClick}
          />

          <DeliveryType handleChange={handleChange} expanded={expanded} />

          <PaymentMethod handleChange={handleChange} expanded={expanded} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <SidePanel />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Content;
