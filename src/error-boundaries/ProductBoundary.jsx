import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ProductBoundary(){
    const error = useRouteError()

    if(isRouteErrorResponse(error)){
        switch (error.status) {
            case 404:
                return <h2>Eita, o produto não foi encontrado 😮</h2>    
            case 401:
                return <h2>Você não esta autorizado a ver essa pagina 🔏</h2>
            case 400:
                return <h2>Parece que algo deu errado na requisição ↕😧 </h2>
            case 500:
                <h2>Erro interno no servidor 🛠 </h2>
        }
    }
    return <h2>Algo deu errado </h2>
}
