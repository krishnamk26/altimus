import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  AccordionActions,
  Box,
} from "@mui/material";
import ShipmentCard from "./ShipmentCard";
import DeliveryStatus from "./DeliveryStatus";
import "./shipment.css"

function Shipment({ isShipmentChange, handleShipmentClick, firstCard, secondCard, handleCardClick, selectedCard, handleShipmentContinue, isShipmentContinue }) {

  return (
    <Grid sx={{ display: "flex", flexDirection: "column", marginBottom: "32px" }}>
      <Accordion defaultExpanded>
      {isShipmentContinue && !isShipmentChange&&(
          <AccordionSummary>
            <DeliveryStatus
              isShipmentContinue={isShipmentContinue}
              handleShipmentClick={handleShipmentClick}
              selectedCard={selectedCard}
              firstCard={firstCard}
              secondCard={secondCard} />
          </AccordionSummary>
        )}
        {!isShipmentChange&& !isShipmentContinue&&(
          <AccordionDetails sx={{ padding: "16px" }}>
            <ShipmentCard
              firstCard={firstCard}
              secondCard={secondCard}
              handleCardClick={handleCardClick}
              selectedCard={selectedCard}
              handleShipmentContinue={handleShipmentContinue} />

            <Box sx={{ padding: "16px", background: "white", borderTop: "1px solid #eeeeee", borderBottomRightRadius: "8px", borderBottomLeftRadius: "8px" }}>
              <AccordionActions>
                <Button type="button" variant="outliend" sx={{ color: "#fff", backgroundColor: "#1a2228", ":hover": { backgroundColor: "black" }, }} onClick={handleShipmentContinue}>Continue</Button>
                {isShipmentContinue && <DeliveryStatus/>}
              </AccordionActions>
            </Box>
          </AccordionDetails>
        )}
      </Accordion>
    </Grid>
  );
}

export default Shipment;
