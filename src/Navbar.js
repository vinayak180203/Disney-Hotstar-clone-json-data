import Logo from "./logo.svg";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isSpecialPage = location.pathname === '/home';
    return (  
        <nav className={isSpecialPage ? 'special-navbar' : 'navbar'}>
            <img className="logo" src={Logo} alt="Disney+Hotstar Logo" />
            <div className="links">
              <button className="btn">Login</button>
            </div>
        </nav>
    );
}
 
export default Navbar;