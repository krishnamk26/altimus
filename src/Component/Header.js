import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { CallOutlined } from "@mui/icons-material";
import Button from '@mui/material/Button';

function Header({ image,number }) {
  return (
    <header>
      <div>
      <Button size="Small" variant="Primary">
        <span className="align-icon">
          <LockOutlinedIcon fontSize="Medium" />
        </span>
        <span>Secure</span>
      </Button>
      </div>
      <div>
        <img src={image} alt="logo" />
      </div>
      <div>
        <Button size="Small" variant="Outlined">
          <span>
            <CallOutlined fontSize="Small" />
          </span>
          <span>{number}</span>
        </Button>

        <Button size="Small" variant="Primary">
          <span>
            <ChevronLeftOutlinedIcon fontSize="Medium" />
          </span>
          <span>Back To Cart</span>
        </Button>
      </div>
    </header>
  );
}

export default Header;
