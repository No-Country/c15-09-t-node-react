import { Navbar } from "../components/Navbar";
import homeImage from "../assets/images/beer_bottle_and_mug.svg";
import "./Home.css";

export const Home = () => {
  return (
    <div className="bg-[#1B190C] font-poppings">
      <div className="sm:px-20 px-12 sm:h-screen min-h-[110vh] pt-9 relative overflow-hidden max-w-[1440px] mx-auto">
        <Navbar />
        <main className="md:w-[540px] w-full md:h-2/3 h-fit flex items-center mt-16">
          <div className="">
            <h1 className="md:text-6xl text-5xl text-white font-bold mb-10 z-10 relative text-shadow">
              El Arte de la Cerveza Casera
            </h1>
            <p className="text-white md:text-xl text-lg md:w-96 leading-8 z-10 relative text-shadow-2">
              Encuentra inspiración en una amplia colección de recetas probadas y, lo mejor de todo,
              ¡también puedes compartir tus creaciones únicas con la comunidad! Descubre, aprende y
              conviértete en un maestro cervecero desde la comodidad de tu dispositivo.
            </p>
          </div>
          <img
            className="absolute right-0 top-28 w-[600px] z-0 lg:brightness-100 brightness-50"
            src={homeImage}
          ></img>
        </main>
      </div>
    </div>
  );
};
