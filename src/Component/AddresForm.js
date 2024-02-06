import React, { useState } from "react";
import {
  AccordionDetails, Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, List, Stack, TextField, Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function AddresForm({ checked, handleChanged, isCancelClick, handleCancelClick}) {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [phonenumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [address3, setAddress3] = useState("")
  const [town, setTown] = useState("")
  const [state, setState] = useState("")
  const [postalcode, setPostalCode] = useState("")
  const navigate = useNavigate()

  const handleSubmitForm = (e) => {
    e.preventDefault()
    setFirstName((prevState) => ({
      ...prevState,
      [e.target.firstname]: e.target.value
    }))

    if (firstname && lastname && phonenumber && country && address1 && address2 && address3 && town && state && postalcode) {
      fetch("http://localhost:8000/address", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ firstname, lastname, phonenumber, address1, address2, address3, town, state, postalcode })
      }).then(() => navigate("/"))
    }
  }

  return (
    <AccordionDetails>
      <Box sx={{ marginBottom: "16px" }}>
        <Grid container sx={{ boxSizing: "border-box", display: "flex", flexWrap: "wrap", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
          <Grid item sx={{ boxSizing: "border-box", margin: "0" }}>
            <Typography variant="div" component="h5" sx={{ textTransform: "uppercase" }}>
              Edit Delivery Address
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "block" }}>
        <Box>
          <form onSubmit={handleSubmitForm} autoComplete="off" noValidate>
            <Grid
              container
              spacing={2}
              sx={{ boxSizing: "border-box", display: "flex", flexFlow: "wrap", marginTop: "-16px", width: "calc(100% + 16px)", marginLeft: "-16px", }}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }} >
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }} > First Name
                    <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>
                      *
                    </Box>
                  </FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    onChange={(e) => setFirstName(e.target.value)}
                    color="primary"
                    size="small"
                    type={"text"}
                    value={(e)=>onchange(e.target.value)}
                    firstname="firstname"
                    placeholder="First Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}
                  fullWidth >
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>
                    Last Name
                    <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>
                      *
                    </Box>
                  </FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    onChange={(e) => setLastName(e.target.value)}
                    color="primary"
                    size="small"
                    type="text"
                    value={lastname}
                    firstname="lastname"
                    placeholder="Last Name" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}
                  fullWidth
                >
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>
                    Phone Number{" "}
                    <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>
                      *
                    </Box>
                  </FormLabel>

                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    color="primary"
                    size="small"
                    value={phonenumber}
                    type="number"
                    firstname="phonenumber"
                    placeholder="Phone Number" />
                </FormControl>
              </Grid>
            </Grid>

            <Box
              sx={{ padding: "16px", backgroundColor: "rgb(233, 235, 238)", borderRadius: "8px", margin: "24px 0" }}>
              <Grid container spacing={2}
                sx={{ boxSizing: "border-box", display: "flex", flexFlow: "wrap", marginTop: "-16px", width: "calc(100% + 16px)", marginLeft: "-16px", }}>
                <Grid item xs={12} sm={6} md={8}
                  sx={{ margin: 0, boxSizing: "border-box" }}>
                  <FormControl sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}
                    fullWidth >
                    <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>
                      Find Address
                    </FormLabel>
                    <TextField
                      placeholder="Find Address"
                      size="small"
                      sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, backgroundColor: "white" }}
                      inputsProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>),
                      }} />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={4}
                  sx={{ boxSizing: "border-box", margin: 0, flexDirection: "row", }}>
                  <FormControl sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}
                    fullWidth
                  >
                    <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>
                      Country
                      <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>
                        *
                      </Box>
                    </FormLabel>
                    <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                      onChange={(e) => setCountry(e.target.value)}
                      color="primary"
                      size="small"
                      value={country}
                      type="text"
                      firstname="country"
                      placeholder="Country" />
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            <Grid container spacing={2} sx={{ boxSizing: "border-box", display: "flex", flexFlow: "wrap", marginTop: "-16px", width: "calc(100% + 16px)", marginLeft: "-16px", }}>
              <Grid item xs={12} sx={{ boxSizing: "border-box", margin: 0, flexDirection: "row", maxWidth: "100%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel color="primary" sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}> Address 1 / Street  <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>*</Box></FormLabel>
                </FormControl>
                <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                  color="primary"
                  size="small"
                  type="text"
                  value={address1}
                  firstname="address1"
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Address 1" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{ flexBasis: "50%", flexGrow: 0, maxWidth: "50%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>Address 2</FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    value={address2}
                    firstname="address2"
                    onChange={(e) => setAddress2(e.target.value)}
                    placeholder="Address 2" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{ flexBasis: "50%", flexGrow: 0, maxWidth: "50%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>Address 3</FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    value={address3}
                    firstname="address3"
                    onChange={(e) => setAddress3(e.target.value)}
                    placeholder="Address 3" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: "100%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>Town / City <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>*</Box></FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    value={town}
                    firstname="town"
                    onChange={(e) => setTown(e.target.value)}
                    placeholder="Town / City" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: "100%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>County / State </FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    value={state}
                    firstname="state"
                    onChange={(e) => setState(e.target.value)}
                    placeholder="County / State" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ maxWidth: "100%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>Postalcode / Zip Code  <Box component="span" sx={{ color: "rgb(255, 0, 0)", textTransform: "none", whiteSpace: "normal", }}>*</Box></FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    value={postalcode}
                    firstname="postalcode"
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Postalcode / Zip Code" />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={12} sx={{ maxWidth: "100%" }}>
                <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "end" }}>
                  <FormLabel sx={{ display: "inline-flex", alignItems: "center", cursor: "pointer", verticalAlign: "middle", marginLeft: "-11px", marginRight: "16px" }}>
                    <FormControlLabel
                      control={<Checkbox checked={checked} onChange={handleChanged} color="info" />}
                      label="Make it default address for Shipping / Billing" />
                  </FormLabel>
                </Stack>
              </Grid>
            </Grid>

            <Box sx={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgb(238, 238, 238)" }}>
              <Grid container spacing={3} sx={{ boxSizing: "border-box", display: "flex", flexFlow: "wrap", marginTop: "-24px", justifyContent: "flex-end", width: "calc(100% + 24px)", marginLeft: "-24px", alignItems: "center" }}>
                <Grid item sx={{ margin: 0, boxSizing: "border-box", flexDirection: "row" }}>
                  <Button type="button" variant="outliend" sx={{ backgroundColor: "transparent", cursor: "pointer", minWidth: "100px", color: "rgb(26, 34, 40)", border: "1px solid rgba(26, 34, 40, 0.5)" }} onClick={handleCancelClick}>Cancel</Button>
                  {isCancelClick && <List />}
                </Grid>
                <Grid item sx={{ margin: 0, boxSizing: "border-box", flexDirection: "row" }}>
                  <Button type="submit" variant="contained" sx={{ backgroundColor: "rgb(26, 34, 40)", cursor: "pointer", minWidth: "100px", color: "rgb(255, 255, 255)", border: "1px solid rgba(26, 34, 40, 0.5)", ":hover": { backgroundColor: "black" } }}>Save</Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </Box>
      </Box>
    </AccordionDetails>
  );
}

export default AddresForm;
