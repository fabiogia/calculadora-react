import { Link } from "react-router-dom";

export default function Page404() {
    return <>
        <p>404 - Página não encontrada!</p>
        <Link to="/">Página inicial</Link>
    </>
}