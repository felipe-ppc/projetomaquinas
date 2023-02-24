import React, { useContext }  from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Props = {
    text: string;
}

const SubmitButton: React.FC<Props> = ({text}: Props) =>{


    return(
        <>
        <Grid2 container>
        <Box  style={{padding: '25px'}} >
        <Button  
            variant="contained"
            type="submit" 
            size='medium'
            style={{ backgroundColor: '#00BFFF',  boxShadow:'24px'}}
        >
            <Typography align='center' color="#FAFBFC" >
            {text}
            </Typography>
        </Button>
        </Box>
        </Grid2>
        
        </>
    )
}
export default SubmitButton;