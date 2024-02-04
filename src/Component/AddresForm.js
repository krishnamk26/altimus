import React, { useState } from "react";
import {
  AccordionDetails, Autocomplete, Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Stack, TextField, Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function AddresForm({ countries }) {
  const [checked, setChecked] = useState(true);

  const handleChanged = (event) => {
    setChecked(event.target.checked);
  };
  const [input, setInput] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    findAddress: "",
    country: "",
    address1: "",
    address2: "",
    address3: "",
    town: "",
    state: "",
    postalCode: "",
  });

  const handleChangeForm = (e) =>{
    setInput((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    console.log(input)
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
          <form autoComplete="off" onSubmit={handleSubmitForm}>
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
                    name="name"
                     value={input.name}
                    onChange={handleChangeForm}
                    color="primary"
                    size="small"
                    type={"text"}
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
                    value={input.lastName}
                    name="lastName"
                    color="primary"
                    size="small"
                    onChange={handleChangeForm}
                    type="text"
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
                  <Autocomplete
                    id="country-select-demo1"
                    sx={{ width: 300 }}
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => `+ ${option.phone} `}
                    renderOption={(props, option) => (
                      <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <img
                          loading="lazy"
                          width="20"
                          srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                          src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                          alt=""
                        />
                        {option.label}  +{option.phone}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField sx={{width:"80%", height:"0%"}}
                      size="small"
                      type="number"
                      onChange={handleChangeForm}
                      value={input.phoneNumber}
                      name="phoneNumber"
                        {...params}
                        label= {(option)=> `${option.lable}+ ${option.phone}`}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: 'new-password', // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
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
                      size="small"
                      sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, backgroundColor: "white" }}
                      InputProps={{
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
                  </FormControl>
                  <Autocomplete
                    id="country-select-demo"
                    options={countries}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                      <Box
                        component="li"
                        sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        {option.label}
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField
                      onChange={handleChangeForm}
                        size="small"
                        value={input.country}
                        name="country"
                        sx={{ backgroundColor: "white" }}
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
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
                  onChange={handleChangeForm}
                  name="address1"
                  value={input.address1}
                  placeholder="Address 1" />
              </Grid>
              <Grid item xs={12} sm={6} md={6} sx={{ flexBasis: "50%", flexGrow: 0, maxWidth: "50%" }}>
                <FormControl fullWidth sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, border: 0, verticalAlign: "top", width: "100%", }}>
                  <FormLabel sx={{ color: "rgb(0,0,0,1)", fontWeight: 600, marginBottom: "10px !important", fontSize: "14px", position: "relative", padding: 0, }}>Address 2</FormLabel>
                  <TextField sx={{ display: "inline-flex", flexDirection: "column", position: "relative", minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: "top", width: "100%" }}
                    color="primary"
                    size="small"
                    type="text"
                    onChange={handleChangeForm}
                    value={input.address2}
                    name="address2"
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
                    value={input.address3}
                    onChange={handleChangeForm}
                    name="address3"
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
                    onChange={handleChangeForm}
                    value={input.town}
                    name="town"
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
                    value={input.state}
                    onChange={handleChangeForm}
                    name="state"
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
                    onChange={handleChangeForm}
                    value={input.postalCode}
                    name="postalCode"
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
          </form>
        </Box>
        <Box sx={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgb(238, 238, 238)" }}>
          <Grid container spacing={3} sx={{ boxSizing: "border-box", display: "flex", flexFlow: "wrap", marginTop: "-24px", justifyContent: "flex-end", width: "calc(100% + 24px)", marginLeft: "-24px", alignItems: "center" }}>
            <Grid item sx={{ margin: 0, boxSizing: "border-box", flexDirection: "row" }}>
              <Button type="button" variant="outliend" sx={{ backgroundColor: "transparent", cursor: "pointer", minWidth: "100px", color: "rgb(26, 34, 40)", border: "1px solid rgba(26, 34, 40, 0.5)" }}>Cancel</Button>
            </Grid>
            <Grid item sx={{ margin: 0, boxSizing: "border-box", flexDirection: "row" }}>
              <Button type="submit" variant="contained" sx={{ backgroundColor: "rgb(26, 34, 40)", cursor: "pointer", minWidth: "100px", color: "rgb(255, 255, 255)", border: "1px solid rgba(26, 34, 40, 0.5)", ":hover": { backgroundColor: "black" } }} >Save</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </AccordionDetails>
  );
}

export default AddresForm;
