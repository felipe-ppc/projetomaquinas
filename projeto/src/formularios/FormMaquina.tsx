import React, { useState } from "react";
import { Container, Typography, TextField, Box, Button, Select, SelectChangeEvent, MenuItem, Stack, InputLabel } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { instance } from "../adapters/request/axios";
import swal from 'sweetalert';


const schema = yup.object().shape({
    archGis: yup.string().required(),
    dataAquisicao: yup.string().required(),
    memoriaArmazenamento: yup.string().required(),
    memoriaRam: yup.string().required(),
    modeloMaquina: yup.string().required(),
    numPatrimonio: yup.string().required(),
    sistemaOperacional: yup.string().required(),
  });

  
interface IFormInputs{
    archGis: string;
    dataAquisicao: Date;
    memoriaArmazenamento: string;
    memoriaRam: string;
    modeloMaquina: string;
    numPatrimonio: string;
    sistemaOperacional: string;
  };

  const dadosSistemaOperacional = [
    {
        nome: 'Windows',
        id: 1
    },
    {
        nome: 'Linux',
        id: 2
    },
    {
        nome: 'Mac',
        id: 3
    }
  ];

  const respostaArchGis = [
    'Sim',
    'Não'
  ];

const FormMaquina: React.FC = () =>{

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInputs>({resolver: yupResolver(schema)});
    
    const [nomeSistemaOperacional, setNomeSistemaOperacional] = useState<string>('');
    console.log("Sistema Operacional: ", nomeSistemaOperacional)
    const [archGis, setArchGis] = useState<string>('');
    console.log("Sistema Operacional: ", archGis)

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18'),
      );

      console.log("Data:", value)
      const handleChangeData = (newValue: Dayjs | null) => {
        console.log("Data2", setValue(newValue));
      };

    const handleChange = (event: SelectChangeEvent) =>{
        setNomeSistemaOperacional(event.target.value);
    };

    const handleChangeArchi = (event: SelectChangeEvent) =>{
        setArchGis(event.target.value);
    };
    const onSubmitHandler: any = async (data:FormData) =>{

        const res = await instance.post("/api/machines/create", data)
   
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
                        variant="outlined" 
                        label="Número de Patrinômio"
                        {...register("numPatrimonio", {required:true})}
                    />
                        {errors.numPatrimonio && 
                            <Typography className="message">
                                Número Patrimônio obrigatório!
                            </Typography>}
                    <TextField 
                        style={{width: '100%', marginTop:'5%'}} 
                        label="Modelo da Máquina" 
                        {...register("modeloMaquina", {required:true})}
                    />
                        {errors.modeloMaquina && 
                            <Typography className="message">
                                Modelo Máquina obrigatório!
                            </Typography>}
                    <TextField 
                        style={{width: '100%', marginTop:'5%'}}
                        label="Memória RAM" 
                        {...register("memoriaRam", {required:true})}
                    />
                        {errors.memoriaRam && 
                            <Typography className="message">
                                Memória RAM obrigatório!
                            </Typography>}
                            <TextField 
                                style={{width: '100%', marginTop:'5%'}} 
                                label="Memória de armazenamento(HD/SSD)" 
                        {...register("memoriaArmazenamento", {required:true})}
                    />
                        {errors.memoriaArmazenamento && 
                            <Typography className="message">
                               Memória de armazenamento(HD/SSD) obrigatório!
                            </Typography>}
            
                    <Select
                        style={{width: '100%', marginTop:'5%'}} 
                        value={nomeSistemaOperacional}
                        {...register("sistemaOperacional", {required:true})}
                        onChange={handleChange}
                    >
                         <MenuItem disabled value="">
                            <em>Sistema Operacional</em>
                        </MenuItem>
                        {dadosSistemaOperacional.map((nome)=>(
                           <MenuItem
                           key={nome.id}
                           value={nome.nome}
                           >
                            {nome.nome}
                           </MenuItem> 
                        ))}
                    </Select>
                    {errors.sistemaOperacional && 
                        <Typography className="message">
                            Sistema Operacional obrigatório!
                        </Typography>}

                    <Select
                    label="Teste"
                        placeholder="Teste"
                        style={{width: '100%', marginTop:'5%'}} 
                        value={archGis}
                        {...register("archGis", {required:true})}
                        onChange={handleChangeArchi}
                    >
                         <MenuItem disabled value="">
                            <em>ArchGis instalado?</em>
                        </MenuItem>
                        {respostaArchGis.map((nome)=>(
                           <MenuItem
                           key={nome}
                           value={nome}
                           >
                            {nome}
                           </MenuItem> 
                        ))}
                    </Select>
                    {errors.archGis && 
                        <Typography className="message">
                            ArchiGis obrigatório!
                        </Typography>}

                       <LocalizationProvider 
                        dateAdapter={AdapterDayjs} 
                        style={{width: '100%', marginTop:'5%'}} 
                        >
                            <Stack style={{width: '60%', marginTop:'5%'}} >
                            <DesktopDatePicker
                            label="Data de aquisição"
                            inputFormat="DD/MM/YYYY"
                            value={value}
                            {...register("dataAquisicao", {required:true})}
                            onChange={handleChangeData}
                            renderInput={(params) => <TextField{...params}/>}
                            />
                            {errors.dataAquisicao && 
                        <Typography className="message">
                            Data de aquisição obrigatório!
                        </Typography>}
                            </Stack>
                       </LocalizationProvider>
                       
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
export default FormMaquina;