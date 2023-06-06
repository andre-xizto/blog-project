import Header from "../Header";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <Header/>
        <div className="error-container">
            <h1 className="error">404</h1>
            <h2 className="error-sub">Página não encontrada</h2>
            <Link to='/'>
                <button className="error-btn">Voltar para o ínicio</button>
            </Link>
        </div>
        </>
    );
}

export default ErrorPage;