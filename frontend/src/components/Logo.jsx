import beerMugImage from "../assets/images/noto_beer-mug.svg";

export const Logo = () => {
    return (
        <div className="flex items-center">
            <img src={beerMugImage} alt="Descripcion de la imagen" className="w-10 h-10" />
            <h3 className="text-2x1 font-medium"> Brewers Cookbook</h3>
        </div>
    );
};