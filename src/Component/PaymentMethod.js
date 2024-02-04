import React from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PaymentMethod({handleChange,expanded,setExpanded}) {
  return (
    <div style={{marginBottom:"16px"}}>
          <Accordion
        className="accordion2"
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>payment method</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            lorem padnvt djbai kjjasbkf akjsj c smsf skcjsgcks fm fshajvhcuyasc
            ksf ekfbasicvaisj v v dvdguica ceegevbaskc scjbskc flscl kisc dvjcbs
            cskcjasca
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default PaymentMethod