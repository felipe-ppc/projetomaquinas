
import React from "react";
import SubmitButton from "../butons/submitButton";
import Input from "../input/Input";
import {useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import swal from 'sweetalert';
import { instance } from "../adapters/request/axios";
import { Box, Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

interface IFormInputs{
    nome: string;
    email: string;
    telefone: string;
  };

  const phoneRegex = RegExp(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,8}$/
  );

  const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().matches(phoneRegex)
    .required(),
  }).required();
  type FormData = yup.InferType<typeof schema>;

const Formulario: React.FC = () =>{

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInputs>({resolver: yupResolver(schema)});

    const text: string = "Salvar"

    const form = [
        {
            type: "text",
            text: "nome",
            name: "nome",
            placeholder: "Nome completo",
            label:"Nome",
            teste: {...register("nome", {required:true})},
            // handleOnChange: (()=> {}),
        },
        {
            type: "email",
            text: "email",
            name: "email",
            placeholder: "E-mail",
            label:"E-mail",
            teste: {...register("nome", {required:true})}
            // handleOnChange: (()=> {}),
        },
        {
            type: "tel",
            text: "telefone",
            name: "telefone",
            placeholder: "Ex: DD 99999-9999",
            label:"Telefone",
            teste: {...register("nome", {required:true})}
            // handleOnChange: (()=> {}),
        },
      ]

      const onSubmitHandler: any = async (data:FormData) =>{

        const res = await instance.post("/api/collaborators/create", data)
   
         if(res.status === 200 && res.data.success === true){
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
        <form onSubmit={handleSubmit(onSubmitHandler)}>
         {/* <Input 
            input={form} 
            
            /> */}
            {/* <SubmitButton text={text}/>
             */}

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
        </>
    )
}
export default Formulario;
