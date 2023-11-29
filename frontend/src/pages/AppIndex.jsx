import licorImg from "../assets/images/app-index/licor-hero.png";

import "../assets/styles/components/app-index.css";

export const AppIndex = () => {
  return (
    <section className="section-app-index text-white mt-[56px] rounded-[32px] flex">
      <div className="pt-[123px] pl-[85px]">
        <h1 className="font-poppings text-[38px]">
          El Arte de la
          <span className="block font-homemade">Cerveza Casera</span>
        </h1>

        <p className="mt-6 max-w-[552px]">
          Encuentra inspiración en una amplia colección de recetas probadas y, lo mejor de todo,
          ¡también puedes compartir tus creaciones únicas con la comunidad! Descubre, aprende y
          conviértete en un maestro cervecero desde la comodidad de tu dispositivo.
        </p>

        <button className="bg-primary text-gray-dark py-[12px] w-[246px] font-bold mt-[43px] mb-[97px] rounded-[30px]">
          Descubrir
        </button>
      </div>
      <div className="relative">
        <div className="absolute block-gradiant z-10"></div>
        <img className="-z-10" src={licorImg} alt="hero" />
      </div>
    </section>
  );
};
