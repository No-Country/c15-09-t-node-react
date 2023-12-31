import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllRecetas } from "../services/recipes";

export const Recipe = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllRecetas()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const recetasPorPagina = 10;
  const totalPaginas = Math.ceil(data.length / recetasPorPagina);
  const [paginaActual, setPaginaActual] = useState(1);

  const recetasPaginados = data.slice(
    (paginaActual - 1) * recetasPorPagina,
    paginaActual * recetasPorPagina
  );

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  // Función para renderizar el esqueleto
  const renderSkeleton = () => (
    <div className="w-48">
      <div className="h-60 bg-slate-300 rounded-lg animate-pulse"></div>
      <div className="px-6  py-4">
        <div className="font-bold font-homemade  text-xl mb-2 bg-slate-300 animate-pulse"></div>
        <p className="text-slate-700 text-base bg-slate-300 animate-pulse"></p>
      </div>
    </div>
  );

  return (
    <div className="flex items-center flex-col mt-8">
      <h1 className="font-homemade my-10 self-center md:self-start md:px-4">Recetas</h1>
      <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
        {loading
          ? // Renderizar esqueletos durante la carga
            Array.from({ length: 10 }).map((_, index) => <div key={index}>{renderSkeleton()}</div>)
          : // Renderizar datos cuando estén disponibles
            recetasPaginados.map((receta, index) => (
              <div key={index}>
                <Link to={`/app/recipe/${receta.id}`}>
                  <div className="w-48 hover:scale-110 transition-transform rounded h-full overflow-hidden shadow-lg">
                    <img
                      className="h-60 w-full object-cover"
                      src={receta.image}
                      alt="Cervezas de Autor"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold font-homemade text-xl mb-2">{receta.name}</div>
                      <p className="text-gray-700 text-base ">Autor:{receta.author}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>

      {/* Paginacion*/}

      <div className="flex items-center justify-center mt-20 mb-10 py-2 border-2 border-gray-light rounded-[26px]">
        <button
          className="mx-1 pl-3 pr-7 cursor-pointer text-gray"
          onClick={() => handlePaginaChange(paginaActual - 1)}
          disabled={paginaActual === 1 || loading}
        >
          &lt;
        </button>
        <ul className="flex">
          {[...Array(totalPaginas).keys()].map((numeroPagina) => (
            <li
              key={numeroPagina + 1}
              className={`mx-1 w-6 h-6 flex cursor-pointer text-center justify-center items-center ${
                numeroPagina + 1 === paginaActual
                  ? "  bg-primary rounded-full text-white"
                  : "text-gray"
              }`}
              onClick={() => handlePaginaChange(numeroPagina + 1)}
            >
              <span> {numeroPagina + 1} </span>
            </li>
          ))}
        </ul>
        <button
          className="mx-1 pr-3 pl-7 cursor-pointer  text-gray"
          onClick={() => handlePaginaChange(paginaActual + 1)}
          disabled={paginaActual === totalPaginas || loading}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
