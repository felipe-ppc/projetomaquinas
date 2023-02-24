import React, { useContext } from "react";
import { AppBar, Dialog, DialogTitle, Toolbar, Tooltip} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {ModalContext} from './modalContext';
import Formulario from "../formularios/Formulario";
import FormularioCadastroColaborador from "../formularios/FormColaborador";


const ModalGlobal: React.FC = () =>{

    const {isOpenModal, setIsOpenModal} = useContext(ModalContext)
    console.log("Boolean", isOpenModal)

    const onCloseModal = () =>{
        setIsOpenModal(false);
    }

    return(
    <>
    <Grid2 container>
        <Grid2>
        <Grid2 xs={12}>
            <Dialog 
                open={isOpenModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
        <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
        <Tooltip title="Fechar">
            <IconButton
            onClick={onCloseModal}
            color="inherit"
            aria-label="close"
            >
            <CloseIcon />
            </IconButton>
            </Tooltip>
        </Toolbar>
       
        </AppBar>
        <DialogTitle></DialogTitle>
            <FormularioCadastroColaborador/>
            </Dialog>
        </Grid2>
        </Grid2>
    </Grid2>
    </>
    )
}
export default ModalGlobal;
