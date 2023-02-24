import { useState } from "react";
import { Button, Typography } from "@mui/material";

const ButtonDevolucao = () =>{

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleOpen = () =>{
        setOpenModal(true); 
    };

    return(
        <>  
        <Button  
            variant='outlined'
            size='small'
            style={{ backgroundColor: '#00BFFF'}}
            onClick={handleOpen}
        >
                <Typography align='center' color="#FAFBFC" >
                Devolução
                </Typography>
        </Button>
        </>
    )
}
export default ButtonDevolucao;