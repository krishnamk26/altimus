import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function ShipmentCard({firstCard,secondCard,handleCardClick,selectedCard}) {
  
  return (
    <>
      <Card sx={{ width: "48%", height: "10%", border: selectedCard === "card1" ? "2px solid rgb(14, 77, 164)" : "1px solid black", }} onClick={() => handleCardClick("card1")}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            WebkitBoxAlign: "center",
            gap: "10px",
          }}
          cardId="card1"
        >
          <CardMedia
            sx={{
              overflowClipMargin: "content-box",
              overflow: "clip",
              width: 35,
              display: "inline",
              boxSizing: "inherit",
            }}
            component="img"
            image="https://altimusoutdoor.com/icons/delivery-truck.png"
            alt="delivery"
          />
          <Typography variant="h6" component="div">
            {firstCard}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Card sx={{ width: "48%",border: selectedCard === "card2" ? "2px solid rgb(14, 77, 164)" : "1px solid black", }} onClick={() => handleCardClick("card2")}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            WebkitBoxAlign: "center",
            gap: "10px",
          }}
          cardId="card2"
        >
          <CardMedia
            sx={{
              overflowClipMargin: "content-box",
              overflow: "clip",
              width: 35,
              display: "inline",
              boxSizing: "inherit",
            }}
            component="img"
            image="https://altimusoutdoor.com/icons/collect-box.png"
            alt="Collect From Store"
          />
          <Typography variant="h6" component="div" >
            {secondCard}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ShipmentCard;
