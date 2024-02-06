import React from "react";
import {Button, Grid, Typography } from "@mui/material";

function DeliveryStatus({ selectedCard, firstCard, secondCard,isShipmentChange,isShipmetContinue }) {
  return (
      <Grid container className="shipment-top">
        <Grid item className="shipment-second">
          <Typography component="h5" className="shipment-text" fontWeight={600}>
            Shipment Method
          </Typography>
        </Grid>
        <Grid item className="shipment-second">
          <Button type="button" className="shipment-changebtn" sx={{
            borderradius: "4px", border: " 1px solid rgba(26, 34, 40, 0.5)", borderRadius: "4px", color: "#1a2228", minWidth: "8px", textTransform: "capitalize", ":hover": {
              backgroundColor: "rgb(243, 245, 246)"
            }
          }}onClick={isShipmentChange} >Change</Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            {selectedCard === "card1" && (
              <Typography variant="body1">{firstCard}</Typography>
            )}
            {selectedCard === "card2" && (
              <Typography variant="body1">{secondCard}</Typography>
            )}
          </Typography>
        </Grid>
      </Grid>
  );
}
export default DeliveryStatus;
