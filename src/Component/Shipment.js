import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ShipmentCard from "./ShipmentCard";
import DeliveryStatus from "./DeliveryStatus";
import TopButton from "./TopButton";
import DownButton from "./DownButton";

function Shipment({
  handleChange,
  expanded,
  buttonText,
  showFirstButton,
  handleButtonClick,
  firstCard,
  secondCard,
  handleCardClick,
  selectedCard,
}) {
  return (
    <>
      <Accordion
        sx={{ marginBottom: "32px" }}
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        defaultExpanded
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={
            showFirstButton && (
              <TopButton
                buttonText={buttonText}
                handleButtonClick={handleButtonClick}
              />
            )
          }
          component="div"
        >
          <Typography
            sx={{ width: "100%", flexShrink: 1, textTransform: "uppercase" }}
            variant="div"
            component="h5"
          >
            choose shipment method
            <DeliveryStatus
              selectedCard={selectedCard}
              firstCard={firstCard}
              secondCard={secondCard}
            />
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "rgb(233, 235, 238)",
            padding: "16px",
          }}
        >
          <ShipmentCard
            firstCard={firstCard}
            secondCard={secondCard}
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
          />
        </AccordionDetails>
        <AccordionDetails>
          <Typography
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <DownButton
              buttonText={buttonText}
              handleButtonClick={handleButtonClick}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Shipment;
