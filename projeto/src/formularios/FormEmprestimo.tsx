import { Box, Button, Container, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";

const dadosNomes = [
    {
        nome: 'Felipe',
        id: 1
    },
    {
        nome: 'Maria',
        id: 2
    },
    {
        nome: 'Marcos',
        id: 3
    }
  ];

  const dadosLocal = [
    {
        nome: 'Sala 305',
        id: 1
    },
    {
        nome: 'Goiania',
        id: 2
    },
    {
        nome: 'Sala 302',
        id: 3
    }
  ];
const schema = yup.object().shape({
    nome: yup.string().required(),
    local: yup.string().email().required(),
  });

  
interface IFormInputs{
    nome: string;
    local: string;
  };


const FormularioEmprestimo = () =>{

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInputs>({resolver: yupResolver(schema)});
    
   
    const [nome, setNome] = useState<string>('');
    const handleChangeNome = (event: SelectChangeEvent) =>{
        setNome(event.target.value);
    };
    const onSubmitHandler: any = (data:IFormInputs) =>{
        console.log(data.nome, data.local);
        reset();
  };

return(
    <>
    <Container maxWidth={"sm"}>
    <Grid2 container>
        <Grid2 xs={15}>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
                <Typography style={{fontSize: 25}}>Realizar Empréstimo</Typography>
                   
                <Select
                    style={{width: '100%', marginTop:'5%'}} 
                    value={nome}
                    {...register("nome", {required:true})}
                    onChange={handleChangeNome}
                >
                         <MenuItem disabled value="">
                            <em>Inserir nome</em>
                        </MenuItem>
                        {dadosNomes.map((dados)=>(
                           <MenuItem
                           key={dados.id}
                           value={dados.nome}
                           >
                            {dados.nome}
                           </MenuItem> 
                        ))}
                    </Select>
                    {errors.nome && 
                        <Typography className="message">
                            Nome obrigatório!
                        </Typography>}

                        <Select
                    style={{width: '100%', marginTop:'5%'}} 
                    value={nome}
                    {...register("nome", {required:true})}
                    onChange={handleChangeNome}
                >
                         <MenuItem disabled value="">
                            <em>Inserir local</em>
                        </MenuItem>
                        {dadosLocal.map((dados)=>(
                           <MenuItem
                           key={dados.id}
                           value={dados.nome}
                           >
                            {dados.nome}
                           </MenuItem> 
                        ))}
                    </Select>
                    {errors.nome && 
                        <Typography className="message">
                            Nome obrigatório!
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
export default FormularioEmprestimo;
