import Header from '../../layout/header';
import Aside from '../../layout/aside';
import Main from '../../layout/main';
import Footer from '../../layout/footer';
import EntradaLateral from '../complementos/entradaLateral';



import {Outlet} from "react-router-dom";

function Layout({privado}){

    return (
        <>
        <Header></Header>
        {privado? <Outlet></Outlet>:
        <>
        <Aside> 
            <EntradaLateral link='/lista' src='.\lista.png' clase={"lateral"} nombre={'Lista de Metas'} destino={''}/>
            <EntradaLateral link='/nueva' src='.\plus.png' clase={"lateral"} nombre={'Nueva Meta'} destino={''}/>
        </Aside>
        <Main>
        <Outlet></Outlet>
        </Main>
        </>
        }
       
        <Footer></Footer>
        </>
    );
}

export default Layout;