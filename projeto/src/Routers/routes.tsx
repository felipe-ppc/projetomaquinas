import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'

import MenuApp from '../menuBar/menuApp';
import ModalProvider from '../Modal/modalContext';
import PaginaCadastros from '../Paginas/PaginaCadastros';
import PaginaCadastroColaborador from '../Paginas/PaginaColaborador';
import PaginaEmprestimo from '../Paginas/PaginaEmprestimos';
import PaginaEndereco from '../Paginas/PaginaEndereco';
import PaginaMaquinas from '../Paginas/PaginaMaquinas';

const Routers: React.FC = () => {

    const arrayLinks: any = 
    [
      <Link to={"/PaginaCadastroColaborador"}>Gestão de Colaborador</Link>, 
      <Link to={"/PaginaMaquinas"}>Gestao de Máquinas</Link>,
      <Link to={"/PaginaEndereco"}>Gestao de Endereços</Link>,
      <Link to={"/PaginaEmprestimos"}>Gestao de Emprestimos</Link>,
      <Link to={"/PaginaCadastros"}>Cadastros</Link>
    ]
    
  return (
    <>
    <MenuApp links={arrayLinks}/>
    <ModalProvider>
    <Routes>
        <Route path='/' element={<PaginaCadastroColaborador/>}/>
        <Route path='/PaginaCadastroColaborador' element={<PaginaCadastroColaborador/>}/>
        <Route path='/PaginaMaquinas' element={<PaginaMaquinas/>}/>
        <Route path='/PaginaEndereco' element={<PaginaEndereco/>}/>
        <Route path='/PaginaEmprestimos' element={<PaginaEmprestimo/>}/>
        <Route path='/PaginaCadastros' element={<PaginaCadastros/>}/>
    </Routes>
    </ModalProvider>
    </>
  );
}

export default Routers;