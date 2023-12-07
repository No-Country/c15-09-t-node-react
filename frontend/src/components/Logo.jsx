import beerMugImage from "../assets/images/noto_beer-mug.svg";
import { Link } from 'react-router-dom';

export const Logo = () => {
    return (
        <Link to="/app"><div className="flex items-center">
            <img src={beerMugImage} alt="Descripcion de la imagen" className="w-10 h-10" />
            <h3 className="text-2x1 font-medium"> Brewers Cookbook</h3>
        </div></Link>
    );
};
