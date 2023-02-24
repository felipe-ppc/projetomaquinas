import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import '../style/style.css'
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Buttons from "../butons/buttons";
import TableComponent from "../table/table";
import { instance } from "../adapters/request/axios";
import Paginate from "../table/paginations";
import InputPesquisa from "../inputPesquisa/inputPesquisa";

const PaginaEmprestimo: React.FC = () =>{

  const btnSubmit: string = "Cadastro de Colaborador"

  const columns = [
  {
    title: "Nome do Colaborador ",
    render: "item.nome"
  },
  {
    title: "Número de série",
    render: "item.email"
  },
  {
    title: "Local",
    render: "item.telefone"
  },
  {
    title: "Status",
    render: "item.email"
  },
  {
    title: "Data Emprestimo",
    render: "item.email"
  },
  {
    title: "Data devolução",
    render: "item.email"
  }
]
console.log("Dados", columns)
const [emprestimo,setEmprestimo] = useState([]);

console.log("Colaborador: ", emprestimo)

const dataEmprestimo = async () => {
  setEmprestimo((await instance.get("")).data.data)
}


useEffect(() => {
  dataEmprestimo();
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
      <TableComponent columns={columns} data={emprestimo} />
      <Paginate limit={""}/>
      </Grid2>
    </Grid2>
    </Container> 
  </>
  )
}
export default PaginaEmprestimo;
