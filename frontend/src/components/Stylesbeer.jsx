import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllStyles } from "../services/styles";
import imagenEstilos from "../assets/images/imageRegister.png";

export const Stylesbeer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllStyles().then((data) => setData(data));
  }, []);

  console.log(data);

  const productosPorPagina = 15;
  const totalPaginas = Math.ceil(data.length / productosPorPagina);
  const [paginaActual, setPaginaActual] = useState(1);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const productosPaginados = data.slice(
    (paginaActual - 1) * productosPorPagina,
    paginaActual * productosPorPagina
  );

  return (
    <div className="flex items-center flex-col mt-8 ">
      <h1 className="font-homemade my-10 self-start">Estilos de cerveza</h1>
      <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
        {productosPaginados.map((producto, index) => (
          <div key={index}>
            {" "}
            <Link to={`/app/styles/${producto.id}`}>
              <div className="w-48 hover:scale-110 transition-transform rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imagenEstilos} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold font-homemade text-xl mb-2">{producto.name}</div>
                  <p className="text-gray-700 text-base">{producto.category}</p>
                </div>
              </div>{" "}
            </Link>
          </div>
        ))}
      </div>

      {/* Paginación */}

      <div className="flex items-center justify-center mt-20 mb-10 py-2 border-2 border-gray-light  rounded-[26px] ">
        <button
          className="mx-1 pl-3 pr-7 cursor-pointer text-gray"
          onClick={() => handlePaginaChange(paginaActual - 1)}
          disabled={paginaActual === 1}
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
          disabled={paginaActual === totalPaginas}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
