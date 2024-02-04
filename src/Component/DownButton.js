import React from "react";
import Button from "@mui/material/Button";

function DownButton({handleButtonClick,buttonText}) {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          color: "white",
          textTransform: "capitalize",
          border: "1px solid black",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "black",
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

export default DownButton;
