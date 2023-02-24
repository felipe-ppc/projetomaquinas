import React, { useState } from "react";
import TablePagination from '@mui/material/TablePagination';

type Props = {
    limit: string
}

const Paginate = ({limit}: Props) =>{

    const teste2 = limit;
    console.log("Props: ", teste2)

    const [page, setPage] = useState(2);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return(
    <>

    
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    </>
    )
}
export default Paginate;
