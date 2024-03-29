import React, { useState } from 'react'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Radio from "@mui/material/Radio";
import Stack from "@mui/system/Stack";
import { Box, Button, Typography } from '@mui/material';
import AddresForm from './AddresForm';
import { useNavigate } from 'react-router-dom';

function List2({ handleChanged, handleEditClicked, isEditClick, inputs, address }) {
    const [selectedValue, setSelectedValue] = useState("");
    const navigate = useNavigate()

    return (
        <Box sx={{display:"flex", flexDirection:"row"}}>
            {address.map(add => (
                <Box sx={{ backgroundColor: "rgb(243, 245, 246)", height: "100%", borderRadius: "5px", border: "1px", borderStyle: "solid", borderColor: "rgb(108, 133, 167)", marginLeft: "8px" , }} key={add.id}>

                    <Stack sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                        <Stack
                            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "8px", }}>
                            <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px", }} >
                                <Radio checked={selectedValue === "a"} onChange={handleChanged} value="a" name="radio-buttons" inputProps={{ "aria-label": "A" }} />
                                <Box
                                    sx={{ fontWeight: 700, lineHeight: 1.5, whiteSpace: "normal", textTransform: "none", }}> {`${add.firstname}, ${add.lastname}`}
                                </Box>
                            </Stack>
                            <Box sx={{ backgroundColor: "rgb(243, 245, 246)", height: "100%", borderRadius: "5px", cursor: "pointer", border: "1.5px", borderStyle: "solid", borderColor: "rgb(108, 133, 167)", }}>
                                <Button sx={{ display: "inline-flex", alignItems: "center", justifyContent: "center", position: "relative", boxSizing: "border-box", verticalAlign: "middle", color: "white", backgroundColor: "rgb(26, 34, 40)", boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px", minWidth: "60px", ":hover": { backgroundColor: "black", color: "white" } }} onClick={handleEditClicked}>
                                    Edit
                                </Button>
                                {isEditClick && <AddresForm address={address}/>}

                            </Box>
                        </Stack>
                    </Stack>

                    <Box sx={{ backgroundColor: "white", padding: "8px", borderRadius: "5px", height: "100%", margin: "8px" }}>
                        <Stack sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                            <LocationOnOutlinedIcon />
                            <Typography>{`${add.address1}, ${add.address2}, ${add.address3}, ${add.town}, ${add.country}`}</Typography>
                        </Stack>
                        <Stack sx={{ display: "flex", flexDirection: "row", gap: "8px", marginTop: "8px", }} >
                            <CallOutlinedIcon />
                            <Typography>{add.phonenumber}</Typography>
                        </Stack>
                    </Box>
                </Box>
            ))}

        </Box>
    )
}

export default List2