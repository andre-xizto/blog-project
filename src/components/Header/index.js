import logo from '../../svg/logo.svg'
import iconsearch from '../../svg/icon-search.svg';

function Header () {

    const altLogo = "Logo do blog";
    
    return (<>
        <header className="flex justify-between align-center">
            <div className="logo">
                <img src={logo} alt={altLogo}/>
                </div>
            <div className="search">
                <input type="text" name="search" placeholder="O que está procurando?" className="search-input"></input>
                <img src={iconsearch} className="search-icon"/>
            </div>
            <ul className="menu">
                <li className="menu-item ">
                    <a href="#" className="menu-link">Contato</a>
                </li>
                <li className="menu-item ">
                    <a href="#" className="menu-link">Sobre</a>
                </li>
                <li className="menu-item">
                    <a href="#" className="menu-link">Posts</a>
                </li>
            </ul>
        </header>
    </>);
}

export default Header;