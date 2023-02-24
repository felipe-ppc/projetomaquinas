import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import '../style/style.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import TableComponent from "../table/table";
import { instance } from "../adapters/request/axios";
import Paginate from "../table/paginations";
import InputPesquisa from "../inputPesquisa/inputPesquisa";

const PaginaCadastroColaborador: React.FC = () =>{

  const columns = [
  {
    title: "Nome do local",
    render: "item.nomeLocal"
  },
  {
    title: "Número da sala",
    render: "item.numSala"
  },
]
console.log("Dados", columns)
const [place,setPlace] = useState([]);

console.log("Colaborador: ", place)

const dataPlace = async () => {
  setPlace((await instance.get("api/places/paginate")).data.data)
}


useEffect(() => {
    dataPlace();
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
            </Grid2>
            </Grid2>
            </Container>
        </Box>
        </Stack>
        <InputPesquisa/>
        <TableComponent columns={columns} data={place} />
        <Paginate limit={""}/>
        </Grid2>
        </Grid2>
        </Container> 
  </>
  )
}
export default PaginaCadastroColaborador;
