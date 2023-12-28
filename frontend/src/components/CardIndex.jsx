import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllStyles } from "../services/styles";
import { calculateAverageColor } from "../utils/calculateAverageColor";
import { findColor } from "../utils/findColor";
import { colorRanges } from "../utils/colorRanges";

export const CardIndex = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllStyles().then((data) => {
      const dataFiltrada = data.slice(0, 5);
      setData(dataFiltrada);
    });
  }, []);

  return (
    <div className="flex items-center flex-col mt-16 ">
      <h1 className="font-homemade my-10  text-center"> Estilos de Cervezas</h1>
      <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
        {data.map((estilo, index) => {
          // Calcular el color promedio de la cerveza
          const averageColor = calculateAverageColor(estilo.color_min, estilo.color_max);
          // Encontrar el rango de color en el cual cae el color promedio de la cerveza
          const colorRange = findColor(colorRanges, averageColor);
          // Si se encuentra un rango de color utilizar esa imagen de lo contrario utilizar un placeholder
          const beerImage = colorRange ? colorRange.image : "https://placehold.co/400";
          return (
            <div key={index}>
              {" "}
              <Link to={"/app/styles"}>
                <div className="w-48  bg-[#e8e8e8] hover:scale-110 transition-transform rounded h-full overflow-hidden shadow-lg">
                  <img
                    className="h-60 w-full object-cover"
                    src={beerImage}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 text-black">
                    <div className="font-bold  text-xl mb-2 text-[#652e1f]">{estilo.name}</div>
                    <p className="text-gray-700 text-base">{estilo.category}</p>
                  </div>
                </div>{" "}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
