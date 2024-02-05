import React from "react";
import {Typography } from "@mui/material";

function DeliveryStatus({selectedCard,firstCard,secondCard}) {
  return (
    <>
      <Typography
        sx={{
          width: "auto",
          flexShrink: 0,
          fontSize:"12px",
          lineHeight:"1.43em",
          padding: "0px, 16px, 0px, 0px",
          textTransform: "capitalize",
          fontWeight: "normal",
        }}
        variant="p"
        component="div"
      > 
        {selectedCard === "card1" && (
          <Typography variant="body1">{firstCard}</Typography> 
        )}
        {selectedCard === "card2" && (
          <Typography variant="body1">{secondCard}</Typography>
        )}
        
      </Typography>
    </>
  );
}
export default DeliveryStatus;
