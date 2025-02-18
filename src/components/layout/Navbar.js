import { Link, useLocation } from 'react-router-dom';

import Container from './Container';

import  styles  from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

const Navbar = () => {

    const location = useLocation();
    
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link 
                            to="/" 
                            className={location.pathname === "/" ? styles.active : ""}
                        >Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link 
                            to="/projects"
                            className={location.pathname === "/projects" ? styles.active : ""}
                        >Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link 
                            to="/company"
                            className={location.pathname === "/company" ? styles.active : ""}
                        >Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link 
                            to="/contatc"
                            className={location.pathname === "/contatc" ? styles.active : ""}
                        >Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    );
}

export default Navbar;