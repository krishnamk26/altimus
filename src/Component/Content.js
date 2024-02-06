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
  const [newAddress, setNewAddress] = useState(false)
  const [isSaveClick, setSaveClick] = useState(false)
  const [isEditClick, setEditClick] = useState(false)
  const [isCancelClick, setCancelClick] = useState(false)
  const [isShipmentContinue, setShipmentContinue] = useState(false)
  const [isShipmentChange, setShipmetChange] = useState(false)
  const [checked, setChecked] = useState(true);


  const handleSaveClick = () => {
    setSaveClick(true)
  } // form save button

  const handleChanged = (event) => {
    setChecked(event.target.checked);
  }; // address form radiobutton

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  }; // Accordion expand function

  const handleEditClicked = () => {
    setEditClick(true)
  }

  const handleCardClick = (cardid) => {
    setSelectedCard(cardid);
  }; // choose shipment card function 

  const handleShipmentClick = () => {
    setShipmetChange(true)
  }
  const handleShipmentContinue = () => {
    setShipmentContinue(true)
  }
  const handleCancelClick = () => {
    setCancelClick(true)
  } // address Form cancel button
  return (
    <Grid container sx={{ padding: "40px 60px", minHeight: "100vh", backgroundColor: "rgb(241, 243, 246)" }}>
      <Grid item xs={8}   >
        <Box >
          <Shipment
            handleChange={handleChange}
            expanded={expanded}
            firstCard={firstCard}
            secondCard={secondCard}
            selectedCard={selectedCard}
            handleCardClick={handleCardClick}
            isShipmentChange={isShipmentChange}
            handleShipmentClick={handleShipmentClick}
            isShipmentContinue={isShipmentContinue}
            handleShipmentContinue={handleShipmentContinue}
          />

          <AddresInfo
            handleChange={handleChange}
            expanded={expanded}
            newAddress={newAddress}
            handleNewAddress={() => setNewAddress(true)}
            handleSaveClick={handleSaveClick}
            isSaveClick={isSaveClick}
            checked={checked}
            handleChanged={handleChanged}
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
