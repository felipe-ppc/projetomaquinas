import React, { useEffect, useState } from "react";
import { Box, Button, Container } from "@mui/material";
import { Stack } from "@mui/system";
import '../style/style.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Buttons from "../butons/buttons";
import TableComponent from "../table/table";
import { instance } from "../adapters/request/axios";
import Paginate from "../table/paginations";
import InputPesquisa from "../inputPesquisa/inputPesquisa";

const PaginaCadastroColaborador: React.FC = () =>{

  const btnSubmit: string = "Cadastro de Colaborador"

  const columns = [
  {
    title: "Nome",
    render: "item.nome"
  },
  {
    title: "E-mail",
    render: "item.email"
  },
  {
    title: "Telefone",
    render: "item.telefone"
  },
]
console.log("Dados", columns)
const [collaborators,setCollaborators] = useState([]);

console.log("Colaborador: ", collaborators)

const dataCollaborators = async () => {
  setCollaborators((await instance.get("api/collaborators/paginate")).data.data)
}


useEffect(() => {
  dataCollaborators();
 },[]);

  return(
  <>

  <Container maxWidth="xl">
    <Grid2 container>
      <Grid2 xs={12}>
      <Stack direction="row">
      <Box mt={'100px'}>
      <Container maxWidth="xl">
        <Grid2 container>
        <Grid2 xs={12}>
      {/* <Buttons text={btnSubmit}/> */}
        </Grid2>
        </Grid2>
        </Container>
      </Box>
      </Stack>
      <InputPesquisa/>
      <TableComponent columns={columns} data={collaborators} />
      <Paginate limit={""}/>
      </Grid2>
    </Grid2>
    </Container> 
  </>
  )
}
export default PaginaCadastroColaborador;
