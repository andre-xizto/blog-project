import logo from '../../svg/logo.svg'
import iconsearch from '../../svg/icon-search.svg';
import { useNavigate } from 'react-router-dom';

function Header () {

    const altLogo = "Logo do blog";
    const navigate = useNavigate();

    const handleNavigate = (page) => {
        navigate(page);
    }
    
    return (<>
        <header className="flex justify-between align-center">
            <div className="logo" onClick={() => handleNavigate('/')}>
                <img src={logo} alt={altLogo} className='logo-img'/>
            </div>
            <div className="search">
                <input type="text" name="search" placeholder="O que está procurando?" className="search-input"></input>
                <img src={iconsearch} className="search-icon"/>
            </div>
            <ul className="menu">
                <li className="menu-item "  onClick={() => handleNavigate('categorias')}>
                    <a className="menu-link">Categorias</a>
                </li>
                <li className="menu-item "  onClick={() => handleNavigate('contato')}>
                    <a className="menu-link">Contato</a>
                </li>
                <li className="menu-item "  onClick={() => handleNavigate('posts')}>
                    <a className="menu-link">Posts</a>
                </li>
            </ul>
        </header>
    </>);
}

export default Header;