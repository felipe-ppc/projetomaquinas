import React from "react";
import { Container, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";


type input ={
    id: string,
    name: string,
    type: any,
    placeholder: string,
    label: string,
    // handleOnChange: (()=> {}),
    // value: any
}


const Input: React.FC<input> = ({type, label, placeholder, name, id}: input) =>{

    return(
        <>
        <Container maxWidth={"sm"}>
    <Grid2 container>
        <Grid2 xs={12}>
            <TextField 
                style={{width: '100%', marginTop:'5%'}} 
                name={name}
                id = {name}
                type={type} 
                variant="outlined" 
                placeholder={placeholder}
                // value={value}  
                label={label} 
            />
        {/* {
         input.map((input: input, key: number)=>{
         return(<TextField 
                key={key}
                style={{width: '100%', marginTop:'5%'}}
                {...input}
            />
            )  
         })   
        } */}
        </Grid2>
    </Grid2>
    </Container>
        </>
    )
}
export default Input;