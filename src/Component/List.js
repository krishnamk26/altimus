import React, { useState } from "react";
import { Typography, Button, AccordionDetails, FormControlLabel, Checkbox, Grid, AccordionActions } from "@mui/material";
import Box from "@mui/system/Box";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import List2 from "./List2";

function List({newAddress,handleNewAddress}) {
 
  const [checked, setChecked] = useState(true);
 

 
  const handleChanged = (event) => {
    setChecked(event.target.checked);
  }
  return (
      <>
      {/* {!newAddress&&( */}
        <AccordionDetails sx={{ padding: "16px" }}>
        <Box sx={{ marginBottom: "16px" }}>
          <Grid sx={{boxSizing: "border-box",display: "flex",flexWrap: "wrap",width: "100%",flexDirection: "row",alignItems: "center",
              justifyContent: "space-between",}}>
            <Grid sx={{ boxSizing: "border-box" }}>
              <Typography sx={{lineHeight: "24px",textTransform: "uppercase",fontWeight: 600,}} >
                Delivery address
              </Typography>
            </Grid>
            <Grid sx={{ boxSizing: "border-box" }}>
              <Button variant="outlined"sx={{display: "inline-flex",alignItems: "center",justifyContent: "center",position: "relative",boxSizing: "border-box",outline: "0px",backgroundColor: "transparent",cursor: "pointer",fontWeight: 500,
                  lineHeight: 1.75,padding: "5px 15px",borderRadius: "6px",color: "rgb(26, 34, 40)",border: "1px solid rgba(26, 34, 40)",":hover:": {
                    backgroundColor: "transparent",
                    border: "1px solid rgba(26, 34, 40)",},}} onClick={handleNewAddress}>
                <AddOutlinedIcon sx={{display: "inherit",marginRight: "8px",marginLeft: "-4px",color: "rgb(26, 34, 40)",}}/>
                New Address
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row"}}> 
          <List2/>
          <List2/>
          <List2/>
        </Box>
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={handleChanged} color="info" />}
            label="My delivery address & billing address are same" />
        <AccordionActions>
          <Button type="button" sx={{color:"#fff",backgroundColor:"#1a2228", ":hover":{backgroundColor:"black"}}} 
          >Continue</Button> 
        </AccordionActions>
      </AccordionDetails>
      </>

  );
}

export default List;
