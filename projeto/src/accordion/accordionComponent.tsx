import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import FormularioCadastroColaborador from "../formularios/FormColaborador";
import FormMaquina from "../formularios/FormMaquina";
import FormularioEndereco from "../formularios/FormEndereco";


const AccordionComponent = () => {

    const [expanded, setExpanded] = useState<string | false>(false);
    
    const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

    return(
        <>

<Container maxWidth="xl">
    <Grid2 container>
        <Grid2 xs={24}>
        <Box sx={{width:'100%'}} mt={10}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ fontSize: 18, width: '100%', flexShrink: 0, textAlign:"center" }}>
           Cadastro de Colaborador
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         <FormularioCadastroColaborador/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ fontSize: 18, width: '100%', flexShrink: 0, textAlign:"center"  }}>Cadastro de Máquinas</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormMaquina/>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ fontSize: 18, width: '100%', flexShrink: 0, textAlign:"center"  }}>
            Cadastro de endereço
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <FormularioEndereco/>
        </AccordionDetails>
      </Accordion>
        
    </Box>    
    </Grid2>
    </Grid2>
    </Container>
        </>
    )
}
export default AccordionComponent;
