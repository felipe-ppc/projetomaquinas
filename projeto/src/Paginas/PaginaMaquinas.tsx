import { Container, Stack, Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import React, { useEffect, useState } from "react";
import { instance } from "../adapters/request/axios";
import Buttons from "../butons/buttons";
import InputPesquisa from "../inputPesquisa/inputPesquisa";
import ModalGlobal from "../Modal/Modal";
import Paginate from "../table/paginations";
import TableComponent from "../table/table";

const PaginaMaquinas: React.FC = () =>{

  const columns = [
    {
      title: "Número de patrimônio",
      render: "item.numeropatrimonio"
    },
    {
      title: "Modelo",
      render: "item.modelomaquina"
    },
    {
      title: "Sistema Operacional",
      render: "item.sistemaoperacional"
    },
    {
      title: "Memória RAM",
      render: "item.memoriaram"
    },
    {
      title: "HD/SSD",
      render: "item.hdmaquina"
    },
    {
      title: "ArchGis",
      render: "item.softwarearcgis"
    },
    {
      title: "Máquina Operacional?",
      render: "item.maquinaoperacional"
    },
    {
      title: "Data de aquisição",
      render: "item.dataaquisicao"
    },
  ]

  const [dataMachine,setDateMachine] = useState([]);

console.log("Colaborador: ", dataMachine)

const dataCollaborators = async () => {
  setDateMachine((await instance.get("api/machines/paginate")).data.data)
}


useEffect(() => {
  dataCollaborators();
 },[]);

 const btnSubmit: string = "Cadastro de máquinas"

    return(
<>
    <Container maxWidth="xl">
    <Grid2 container>
      <Grid2 xs={12}>
    <Stack 
        direction="row" 
        justifyContent={"center"} 
        alignItems={"center"} 
        spacing={2}
    >
      
      <Box mt={'100px'}>
      {/* <Buttons text={btnSubmit}/> */}
      </Box>
      </Stack>
      </Grid2>
    </Grid2>
    <InputPesquisa/>
    <TableComponent columns={columns} data={dataMachine}/>
    <Paginate limit={""}/>
    <ModalGlobal/>
    </Container> 
</>
    )
}
export default PaginaMaquinas;