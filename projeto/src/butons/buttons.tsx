import React, { useContext }  from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ModalContext } from "../Modal/modalContext";

type Props = {
    text: string;
}

const Buttons: React.FC<Props> = ({text}: Props) =>{

const {setIsOpenModal} = useContext(ModalContext)

    const handleOpen = () =>{
        setIsOpenModal(true);
    };

    return(
        <>
        <Container maxWidth="md">
        <Grid2 container>
        <Grid2 xs={12}>
        <Box>
        <Button  
            variant='outlined'
            size='medium'
            style={{ backgroundColor: '#00BFFF',  boxShadow:'24px'}}
            onClick={handleOpen}
        >
            <Typography align='center' color="#FAFBFC" >
            {text}
            </Typography>
        </Button>
        </Box>
        </Grid2>
        </Grid2>
        </Container>
        </>
    )
}
export default Buttons;