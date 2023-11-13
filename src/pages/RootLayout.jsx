import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
    return(
        <>
        <Header />  
        <main >
            <p>Esse é o Layaout principal. Abaixo esta o conteudo dinamico de cada RootLayout
            </p>
            <hr />
            <Outlet />
        </main> 

         <hr/>
        <footer>
            Feito com React Router DOM
        </footer>

        </>
    )
}