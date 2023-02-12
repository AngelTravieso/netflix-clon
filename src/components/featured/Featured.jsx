import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import "./featured.scss";

const Featured = ({ type }) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>
                        {type === "movie" ? "Peliculas" : "Series"}
                    </span>
                    <select name="genre" id="genre">
                        <option>Género</option>
                        <option value="aventura">Aventura</option>
                        <option value="comedia">Comedia</option>
                        <option value="crimen">Crimen</option>
                        <option value="fantasia">Fantasía</option>
                        <option value="historia">Historia</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="ficcion">Ficción</option>
                        <option value="terror">Terror</option>
                        <option value="animacion">Animación</option>
                        <option value="drama">Drama</option>
                        <option value="documentales">Documentales</option>
                    </select>
                </div>
            )}
            <img
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="Hero Image"
            />

            <div className="info">
                <img
                    src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                    alt="Feautured Image"
                />

                <span className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis sapiente reprehenderit error magnam itaque sequi magni inventore dolores, consectetur animi quia, eius iure non, eligendi iste maxime veniam optio!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Featured