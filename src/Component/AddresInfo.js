import React, { useState } from "react";
import {
  Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Button,
 
} from "@mui/material";
import Stack from "@mui/system/Stack";
import Box from "@mui/system/Box";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import List from "./List";
import AddresForm from "./AddresForm";


function AddresInfo({ handleChange, expanded, countries }) {
 
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [newAddress, setNewAddress] = useState(false)
  
  const handleNewAddress = () =>{
    setNewAddress(true)
  }
  const handleButtonClick = () => {
    setButtonClicked(true);
    // Add any additional logic or state changes you want to perform here
  };
 
  return (
    
    <Grid sx={{ display: "flex", flexDirection: "column", marginBottom:"16px" }}>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        {!isButtonClicked && ( 
        <AccordionSummary id="panel2-header" aria-controls="panel2-content">
          <Grid
            xs={12}
            direction="column"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Stack
              sx={{
                display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", boxSizing: "border-box",
              }}
            >
              <Typography variant="div" component="h5" sx={{ textTransform: "uppercase" }}>address information
              </Typography>
              <Button sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", outline: "0px", backgroundColor: "transparent", cursor: "pointer", fontWeight: 500, lineHeight: 1.75, padding: "5px 15px", borderRadius: "6px", color:"rgb(26, 34, 40)",border:"1px solid rgba(26, 34, 40, 0.5)"}}  onClick={handleButtonClick}>
                Change
              </Button>
              {isButtonClicked && <List/>}
            </Stack>
            <Box
              sx={{ paddingTop: "10px", paddingBottom: "10px", borderTop: "1px dashed rgb(233, 235, 238)", }}>
              <Typography sx={{ lineHeight: 1.5, color: "rgb(188, 17, 12)", fontWeight: 600, textTransform: "capitalize", }}>
                Deliverd to
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <PersonOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: "rgb(26, 34, 40)",
                    textTransform: "uppercase",
                  }}
                >
                  Name
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <LocationOnOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "rgb(26, 34, 40)",
                    textTransform: "lowercase",
                  }}
                >
                  Address
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <CallOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "rgb(26, 34, 40)",
                    textTransform: "lowercase",
                  }}
                >
                  +91 9578675765
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                borderTop: "1px dashed rgb(233, 235, 238)",
              }}
            >
              <Typography
                sx={{
                  lineHeight: 1.5,
                  color: "rgb(188, 17, 12)",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                billed to
              </Typography>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <PersonOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: "rgb(26, 34, 40)",
                    textTransform: "uppercase",
                  }}
                >
                  Name
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <LocationOnOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "rgb(26, 34, 40)",
                    textTransform: "lowercase",
                  }}
                >
                  Address
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                <CallOutlinedIcon color="disabled" />
                <Typography
                  sx={{
                    lineHeight: 1.5,
                    fontWeight: 400,
                    color: "rgb(26, 34, 40)",
                    textTransform: "lowercase",
                  }}
                >
                  +91 9578675765
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </AccordionSummary>)}
        
        <AccordionDetails sx={{ padding: "16px" }}>
        {!newAddress&&(
          <List
          handleNewAddress={handleNewAddress}
          newAddress = {newAddress}
          />)}
        </AccordionDetails>
        <AccordionDetails>
        {newAddress&&<AddresForm 
        countries={countries}/>}
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
}

export default AddresInfo;
