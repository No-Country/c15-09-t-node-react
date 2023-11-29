import beerMugImage from "../assets/images/noto_beer-mug.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-between mb-36">
      <div className="flex">
        <img src={beerMugImage} className="w-10 h-10 font-medium mr-1"></img>
        <a className="text-white text-2xl flex items-center">Brewer&apos;s Cookbook</a>
      </div>
      <div className="flex items-center">
        <button className="text-black bg-white px-4 py-[0.375rem] mr-6 font-medium rounded-md">
          Iniciar sesion
        </button>
        <button className="text-black bg-white px-4 py-[0.375rem] font-medium rounded-md">
          Registrarse
        </button>
      </div>
    </nav>
  );
};
