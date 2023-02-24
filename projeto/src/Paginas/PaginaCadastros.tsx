import React, { useEffect, useState } from "react";
import { Accordion,Container } from "@mui/material";
import '../style/style.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import AccordionComponent from "../accordion/accordionComponent";


const PaginaCadastros: React.FC = () =>{


  return(
  <>

  <Container maxWidth="xl">
    <Grid2 container>
      <Grid2 xs={12}>
      <AccordionComponent/>
      </Grid2>
    </Grid2>
    </Container> 
  </>
  )
}
export default PaginaCadastros;