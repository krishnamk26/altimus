import React from "react";
import Button from "@mui/material/Button";

function TopButton({handleButtonClick,buttonText}) {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          textTransform: "capitalize",
          border: "1px solid black",
          "&:hover": {
            backgroundColor: "rgb(241, 243, 246)",
            border: "1px solid black",
          },
        }}
        onClick={handleButtonClick}
      >
        {buttonText}
      </Button>
    </>
  );
}

export default TopButton;
