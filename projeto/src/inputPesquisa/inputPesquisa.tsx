import { Box, Container, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const InputPesquisa = () =>{

    return(
    <>
        <Container maxWidth="xl">
            <Grid2 container>
                <Grid2 xs={24}>
                <Box sx={{width:'100%'}} mt={3}>
                <TextField
                    style={{width: 'auto', marginTop:'1%', 
                    backgroundColor: 'white', borderRadius: '10px' }} 
                    type="text" 
                    variant="outlined" 
                    placeholder="Pesquisar"
                />
            </Box>    
            </Grid2>
            </Grid2>
            </Container>
    </>
    )
}
export default InputPesquisa