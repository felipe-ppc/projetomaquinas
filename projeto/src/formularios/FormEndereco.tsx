import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import swal from 'sweetalert';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { instance } from "../adapters/request/axios";

interface IFormInputs{
    nomeLocal: string;
    numSala: string;
  };

  const schema = yup.object().shape({
    nomeLocal: yup.string().required(),
    numSala: yup.string().required()
    .required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;


const FormularioEndereco = () =>{
    

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInputs>({resolver: yupResolver(schema)});

    const onSubmitHandler: any = async (data:FormData) =>{

        try {

            const res = await instance.post("/api/places/create", data)
            if(res.status === 200 ){
                    console.log("Resultado", res)
                    console.log("Mensagem: ", res.data.success)
                    swal({
                        title: " Dados salvo com sucesso!",
                        text: res.data.message,
                        icon: "success",
                      });
                      reset()
                  }
            
        } catch (error) {
            
        }

    //  const res = await instance.post("/api/places/create", data)
     

    //   if(res.status === 200 ){
    //     console.log("Resultado", res)
    //     console.log("Mensagem: ", res.data.success)
    //     swal({
    //         title: " Dados salvo com sucesso!",
    //         text: res.data.message,
    //         icon: "success",
    //       });
    //       reset()
    //   } else{
    //     swal({
    //         title: "Email cadastrado!",
    //         text: res.data.message,
    //         icon: "success",
    //       });
    //   }
  };


return(
    <>
    <Container maxWidth={"sm"}>
    <Grid2 container>
        <Grid2 xs={15}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
                <TextField 
                    style={{width: '100%', marginTop:'5%'}} 
                    id="nomeLocal"
                    type="text" 
                    variant="outlined" 
                    label="Nome do local"
                    {...register("nomeLocal", {required:true})}
                />
                    {errors.nomeLocal && 
                        <Typography className="message">
                            Nome do Local obrigat??rio!
                        </Typography>}
                <TextField 
                    style={{width: '100%', marginTop:'5%'}} 
                    id="numSala"
                    type={'text'}
                    label="N??mero da sala" 
                    placeholder="305 ou 305B"
                    {...register("numSala", {required:true})}
                />
                    {errors.numSala && 
                        <Typography className="message">
                            N??mero da sala obrigat??rio!
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
export default FormularioEndereco;
