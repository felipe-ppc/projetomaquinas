import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import swal from 'sweetalert';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { instance } from "../adapters/request/axios";
import Input from "../input/Input";


const phoneRegex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/
  );

interface IFormInputs{
    nome: string;
    email: string;
    telefone: string;
  };

  const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().matches(phoneRegex)
    .required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;


const FormularioCadastroColaborador = () =>{
    

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInputs>({resolver: yupResolver(schema)});

    const onSubmitHandler: any = async (data:FormData) =>{

     const res = await instance.post("/api/collaborators/create", data)

      if(res.status === 200){
        console.log("Resultado", res.status)
        console.log("Mensagem: ", res.data.success)
        swal({
            title: "Sucesso!",
            text: res.data.message,
            icon: "success",
          });
          reset()
      }
      else{
            swal({
                title: "Email cadastrado",
                text: res.data.message,
                icon: "success",
              });
          }  
  };


return(
    <>
    <Container maxWidth={"sm"}>
    <Grid2 container>
        <Grid2 xs={15}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
                <TextField 
                    style={{width: '100%', marginTop:'5%'}} 
                    id="nome"
                    type="text" 
                    variant="outlined" 
                    label="Nome Completo"
                    {...register("nome", {required:true})}
                />
                    {errors.nome && 
                        <Typography className="message">
                            Nome obrigatório!
                        </Typography>}
                <TextField 
                    style={{width: '100%', marginTop:'5%'}} 
                    id="email"
                    type={'email'}
                    label="Email" 
                    placeholder="email@example.com"
                    {...register("email", {required:true})}
                />
                    {errors.email && 
                        <Typography className="message">
                            E-mail obrigatório!
                        </Typography>}

                <TextField 
                    style={{width: '100%', marginTop:'5%'}} 
                    id="tel"
                    type={'tel'}
                    label="Celular" 
                    {...register("telefone", {required:true})}
                />
                    {errors.telefone && 
                        <Typography className="message">
                            Telefone inválido!
                        </Typography>}

                      
            <Grid2 container>
            <Box  style={{padding: '8px'}} >
                <Button 
                    variant="contained"
                    type="submit" 
                >
                    Salvar
                </Button>
            </Box>
            </Grid2>
            </form>
        </Grid2>
    </Grid2>
    </Container>
    </>
)
}
export default FormularioCadastroColaborador;
