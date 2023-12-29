import Header from '../layout/header';
import Aside from '../layout/aside';
import Main from '../layout/main';
import Footer from '../layout/footer';
import EntradaLateral from '../componentes/entradaLateral';



import {  Outlet } from "react-router-dom";

function Layout(){
    return (
        <>
        <Header></Header>

        <Aside> 
            <EntradaLateral link='/lista' src='.\lista.png' clase={"lateral"} nombre={'Lista de Metas'} destino={''}/>
            <EntradaLateral link='/nueva' src='.\plus.png' clase={"lateral"} nombre={'Nueva Meta'} destino={''}/>
        </Aside>
    
        <Main>
            <Outlet></Outlet>
            
        </Main>
    
        <Footer></Footer>
        </>
    );
}

export default Layout;