import React from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DeliveryType({handleChange,expanded,setExpanded}) {
  return (
    <div style={{marginBottom:"16px"}}>
         <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Delivery type</Typography>
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

export default DeliveryType