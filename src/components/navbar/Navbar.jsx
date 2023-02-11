import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.scss";
import { useState } from 'react';

const Navbar = () => {

    const [isSrolled, setIsSrolled] = useState(false);

    // Ejecuta la función cuando se hace scroll
    window.onscroll = () => {
        // 0 = top, no se ha movido
        setIsSrolled(window.pageYOffset === 0 ? false : true);

        // cleanup
        return () => window.onscroll = null
    }

    return (
        <div className={isSrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />

                    <span>Inicio</span>
                    <span>Series</span>
                    <span>Peliculas</span>
                    <span>Nuevo y Popular</span>
                    <span>Mi Lista</span>
                </div>

                <div className="right">
                    <SearchIcon className="icon" />
                    <span>KID</span>
                    <NotificationsActiveIcon className="icon" />
                    <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />

                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <span>Configuración</span>
                            <span>Salir</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
