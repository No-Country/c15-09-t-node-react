import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import licorImg from "../assets/images/app-index/licor-hero.png";

const SlideContent1 = () => (
  <div>
    <section className="bg-gray-dark appIndex text-white mt-[56px] rounded-[32px] flex flex-col md:flex-row relative justify-between">
      <div className="pt-[123px] pl-[40px]  md:pl-[85px] ">
        <h1 className="font-poppings text-[38px]">
          El Arte de la
          <span className="block font-homemade">Cerveza Casera</span>
        </h1>

        <p className="mt-6 max-w-[512px] text-lg">
          Encuentra inspiración en una amplia colección de recetas probadas y, lo mejor de todo,
          ¡también puedes compartir tus creaciones únicas con la comunidad! Descubre, aprende y
          conviértete en un maestro cervecero desde la comodidad de tu dispositivo.
        </p>

        <Link to="/app/recipe">
          <button className="bg-secondary hover:bg-primary text-gray-dark py-[12px] px-10 font-bold mt-[43px] mb-[97px] rounded-[30px] hover:text-white">
            Descubrir
          </button>
        </Link>
      </div>

      <div className="relative md:block hidden order-2">
        <div className="absolute block-gradiant z-10"></div>
        <img className="-z-10 w-full  rounded-2xl" src={licorImg} alt="hero" />
      </div>
    </section>
  </div>
);

const SlideContent2 = () => (
  <div>
    <section className=" bg-gray-dark appIndex text-white mt-[56px] rounded-[32px] flex w-full h-full">
      <div className="pt-[123px] pl-[40px]  md:pl-[85px] ">
        <h1 className="block font-homemade">La Cerveza Artesanal</h1>

        <p className="mt-6 max-w-[512px] text-lg">
          Es un 90% de la cerveza agua, por lo que en un consumo moderado, nos ayuda a estar
          hidratados. Además, el lúpulo que contiene la cerveza ayuda a prevenir la formación de
          piedras en los riñones.
        </p>

        <Link to="/app/recipe">
          {" "}
          <button className=" bg-secondary hover:bg-primary text-gray-dark py-[12px] px-10 font-bold mt-[43px] mb-[97px] rounded-[30px] hover:text-white">
            Descubrir
          </button>
        </Link>
      </div>

      <div className="relative md:block hidden order-2">
        <div className="absolute block-gradiant z-10"></div>
        <img
          className="-z-10  w-full  rounded-2xl"
          src="https://www.thedrinksbusiness.com/content/uploads/2023/10/Noble-hops-and-European-beer-640x640.jpg"
          alt="hero"
        />
      </div>
    </section>
  </div>
);

export const Carousel = () => {
  const slides = [<SlideContent1 key="1" />, <SlideContent2 key="2" />];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="relative transition-transform duration-500 ease-in-out transform">
      {slides[currentSlide]}

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        {"<"}
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        {">"}
      </button>
    </div>
  );
};
