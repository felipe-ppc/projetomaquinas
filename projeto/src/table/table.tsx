import React from "react";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Container, Typography} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

type Column = {
    title: string,
    render: string | ((row: any)=> string),
}

type Props = {
    columns: Column[], 
    data: any
}

const queryObj = (query: string, obj: any) =>{
    const queryArray = query.split('.');
    let result = obj;
    for(let i = 1; i< queryArray.length; i++){
        if(!result[queryArray[i]]){
            return '';
        }
        result = result[queryArray[i]];
    }
    return result;
} 

const TableComponent: React.FC<Props> = ({columns, data}: Props) => {
    

    return(
    <>
    <Container maxWidth="xl">
    <Grid2 container>
        <Grid2 xs={24}>
        <Box sx={{width:'100%'}} mt={3}>
    <Paper sx={{width:'100%', mb:2}}>
    <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                {
                    columns.map((column: Column, key: number) => (
                        <TableCell key={key}>
                            <Typography style={{fontWeight:'bold', textAlign:'center'}}>
                                {column.title}
                            </Typography>
                        </TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
        <TableBody>
            {
                data.map((row: any, key: number)=>{
                    return (
                        <TableRow key={key}>
                            {
                                columns.map((column: Column, key: number)=>{
                                if(typeof(column.render) == 'string'|| column.render instanceof String){
                                    return(
                                        <TableCell key={key} style={{ textAlign:'center'}}>{queryObj(column.render.toString(), row)}</TableCell> 
                                    )
                                }
                                return  <TableCell key={key} style={{ textAlign:'center'}}>{column.render(row)}</TableCell>
                            })
                            }
                        </TableRow>
                    )
                })
            }
        </TableBody>
        </Table>
    </TableContainer>
    </Paper>
    </Box>    
    </Grid2>
    </Grid2>
    </Container>
    </>
    )
}
export default TableComponent;
