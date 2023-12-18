import { Link } from "react-router-dom";
import { useState } from "react";

export const Recipe = () => {
  const recetas = [
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Corona",
      parrafo: "Descripción corta del objeto 1.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Zulia",
      parrafo: "Descripción corta del objeto 3.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Quilmes",
      parrafo: "Descripción corta del objeto 4.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
    {
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Coors",
      parrafo: "Descripción corta del objeto 2.",
    },
  ];

  const recetasPorPagina = 10;
  const totalPaginas = Math.ceil(recetas.length / recetasPorPagina);
  const [paginaActual, setPaginaActual] = useState(1);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const recetasPaginados = recetas.slice(
    (paginaActual - 1) * recetasPorPagina,
    paginaActual * recetasPorPagina
  );

  return (
    <div className="flex items-center flex-col mt-8 ">
      <h1 className="font-homemade my-10 self-center md:self-start md:px-4">Recetas</h1>
      <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
        {recetasPaginados.map((receta, index) => (
          <div key={index}>
            {" "}
            <Link to={"/app/recipedetails"}>
              <div className="w-48 hover:scale-110 transition-transform rounded overflow-hidden shadow-lg">
                <img className="w-full" src={receta.imagen} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold font-homemade text-xl mb-2">{receta.nombre}</div>
                  <p className="text-gray-700 text-base">{receta.parrafo}</p>
                </div>
              </div>{" "}
            </Link>
          </div>
        ))}
      </div>

      {/* Paginacion*/}

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
