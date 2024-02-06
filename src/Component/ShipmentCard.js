import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Box} from "@mui/material";

function ShipmentCard({ firstCard, secondCard, handleCardClick, selectedCard ,handleShipmentContinue}) {

  return (
    <Box>
        <Box sx={{ marginBottom: "16px" }}>
        <Grid container sx={{ boxSizing: "border-box", display: "flex", flexWrap: "wrap", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
          <Grid item sx={{ boxSizing: "border-box", margin: "0" }}>
            <Typography variant="div" component="h5" sx={{ textTransform: "uppercase" , fontSize:"16px"}}>
              Choose Shipment Method
            </Typography>
          </Grid>
        </Grid>
      </Box>
        <Box sx={{padding:"16px", backgroundColor:"#e9ebee",borderRadius:"8px"}}>
        <Grid container spacing={2}  sx={{boxSizing:"border-box",display:"flex",flexWrap:"wrap",flexDirection:"row",width:"calc(100% + 16px)",marginLeft:"-16px"}}>
          <Grid item xs={12} sm={6} boxSizing={"border-box"} margin={0} flexDirection={"row"} flexBasis={"100%"} maxWidth={"100%"} >
            <Box sx={{height:"100%",background:"white", borderRadius:"8px",cursor:"pointer",border: selectedCard === "card1" ? "2px solid rgb(14, 77, 164)" : "1px solid black", }} onClick={() => handleCardClick("card1")} cardid="card1">
              <Stack sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",padding:"16px"}}>
                <Box component="img" src="https://altimusoutdoor.com/icons/delivery-truck.png" alt="Delivery" width={"35px"}></Box>
                <Typography variant="h6">{firstCard}</Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} boxSizing={"border-box"} margin={0} flexDirection={"row"} flexBasis={"100%"} maxWidth={"100%"}>
            <Box sx={{height:"100%",background:"white", borderRadius:"8px",cursor:"pointer",border: selectedCard === "card2" ? "2px solid rgb(14, 77, 164)" : "1px solid black", }} onClick={() => handleCardClick("card2")} cardid="card2">
              <Stack sx={{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px",padding:"16px"}}>
                <Box component="img" src="https://altimusoutdoor.com/icons/collect-box.png" alt="Collect from store" width={"35px"}></Box>
                <Typography variant="h6">{secondCard}</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      </Box>
  );
}

export default ShipmentCard;
