import { Navbar } from "../components/Navbar";
import homeImage from "../assets/images/beer_bottle_and_mug.svg";

export const Home = () => {
  return (
    <div className="bg-[#1B190C]">
      <div className="px-20 h-screen pt-9 relative overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <main className="w-[540px] h-2/3 flex items-center">
          <div className="">
            <h1 className="text-6xl text-white font-bold mb-10 z-10 relative">
              El Arte de la Cerveza Casera
            </h1>
            <p className="text-white text-xl w-96 font-light leading-8 z-10 relative">
              Encuentra inspiración en una amplia colección de recetas probadas y, lo mejor de todo,
              ¡también puedes compartir tus creaciones únicas con la comunidad! Descubre, aprende y
              conviértete en un maestro cervecero desde la comodidad de tu dispositivo.
            </p>
          </div>
          <img className="absolute right-0 top-28 w-[600px] z-0" src={homeImage}></img>
        </main>
      </div>
    </div>
  );
};
