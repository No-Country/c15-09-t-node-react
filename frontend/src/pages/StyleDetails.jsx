import { useEffect, useState } from "react";
import { getStyleById } from "../services/styles";
import { useParams } from "react-router-dom";
import { colorRanges } from "../utils/colorRanges.js";
import { findColor } from "../utils/findColor.js";
import { calculateAverageColor } from "../utils/calculateAverageColor.js";
import placeholderImage from "../assets/images/placeholder.svg";

// TODO: agregar favoritos cuando agreguen el endpoint
// TODO: arreglar imagenes
export const StyleDetails = () => {
  const [data, setData] = useState(false);
  const [beerImage, setBeerImage] = useState(colorRanges[data.category] || placeholderImage);
  const { id } = useParams();

  const totalSrm = 40;
  const totalIbu = 100;
  const totalAbv = 15;
  function calculatePercentage(value, totalType) {
    return (value / totalType) * 100;
  }

  useEffect(() => {
    getStyleById(id).then((data) => {
      setData(data);
      // Calcular el color promedio de la cerveza
      const averageColor = calculateAverageColor(data.color_min, data.color_max);
      // Encontrar el rango de color en el cual cae el color promedio de la cerveza
      const colorRange = findColor(colorRanges, averageColor);
      // Si se encuentra un rango de color utilizar esa imagen de lo contrario utilizar un placeholder
      setBeerImage(colorRange ? colorRange.image : "https://placehold.co/400");
    });
  }, [id, data.category]);

  // TODO: agregar tooltips

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container font-poppings">
      <main className="flex mt-16 justify-center">
        <div className="hidden md:block">
          <img src={beerImage} alt={`${data.name}`} className="rounded-md" />
        </div>
        <div className="xl:ml-auto sm:ml-8 max-w-xl xl:mr-0 mx-2 sm:mx-8 md:w-1/2">
          <div className="flex md:justify-start justify-center items-center">
            <h1 className="text-4xl font-bold mr-4">{data.name}</h1>
          </div>
          <div className="md:hidden max-w-xs sm:w-96 mx-auto">
            <img src={beerImage} alt={`${data.name}`} className="rounded-md my-4" />
          </div>
          <p className="font-normal mt-6">{data.overall_impression}</p>
          <div className="flex mt-12 text-[18px]">
            <h6 className="text-[#DB8116] font-bold mr-1">CATEGORY:</h6>{" "}
            <h6 className="font-semibold uppercase">{data.category}</h6>
          </div>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">PALE</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#ffe699] via-[#962d00] to-[#36080a] rounded-xl relative">
              {" "}
              <span
                style={{
                  left: `${calculatePercentage(data.color_min, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(data.color_max, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">DARK</p>
          </div>
          <p className="font-bold text-[#DB8116] mx-auto w-fit">
            {data.color_min}-{data.color_max} SRM (COLOR)
          </p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#000000] to-[#909922] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(data.ibu_min, totalIbu)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(data.ibu_max, totalIbu)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#B3B554] mx-auto w-fit">
            {data.ibu_min}-{data.ibu_max} IBU (BITTERNESS)
          </p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#e7e4c1] to-[#d1bf51] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(data.abv_min, totalAbv)}%`,
                }}
                className="absolute h-full  dark:text-white text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(data.abv_max, totalAbv)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#DED490] mx-auto w-fit">
            {data.abv_min}-{data.abv_max}% ABV(ALCOHOL)
          </p>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-12">
            ORIGINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              {data.original_gravity_min}-{data.original_gravity_max}% OG(ORIGINAL GRAVITY)
            </span>
          </h6>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-4">
            FINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              {data.final_gravity_min}-{data.final_gravity_max}% FG(FINAL GRAVITY)
            </span>
          </h6>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">APPEAREANCE</h1>
            <p className="font-normal">{data.appearance}</p>
          </div>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">AROMA</h1>
            <p className="font-normal">{data.aroma}</p>
          </div>
          <div className="mb-8">
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">FLAVOR</h1>
            <p className="font-normal">{data.flavor}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
