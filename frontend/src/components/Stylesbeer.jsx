import { useState } from "react";
import { Link } from "react-router-dom";

export const Stylesbeer = () => {
    const productos = [
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 1",
            parrafo: "Descripción corta del objeto 1.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 2",
            parrafo: "Descripción corta del objeto 2.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 3",
            parrafo: "Descripción corta del objeto 3.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 4",
            parrafo: "Descripción corta del objeto 4.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 5",
            parrafo: "Descripción corta del objeto 5.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 6",
            parrafo: "Descripción corta del objeto 6.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 7",
            parrafo: "Descripción corta del objeto 7.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 8",
            parrafo: "Descripción corta del objeto 8.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 9",
            parrafo: "Descripción corta del objeto 9.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
        {
            imagen: "https://sheikobsbagels.com/wp-content/uploads/2020/12/IMG_9566-scaled.jpeg",
            nombre: "Objeto 10",
            parrafo: "Descripción corta del objeto 10.",
        },
    ];

    const productosPorPagina = 10;
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);
    const [paginaActual, setPaginaActual] = useState(1);

    const handlePaginaChange = (nuevaPagina) => {
        setPaginaActual(nuevaPagina);
    };

    const productosPaginados = productos.slice(
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
                        <Link to={"/app/styleDetails"}>
                            <div className="w-48 hover:scale-110 transition-transform rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={producto.imagen} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold font-homemade text-xl mb-2">{producto.nombre}</div>
                                    <p className="text-gray-700 text-base">{producto.parrafo}</p>
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
                            className={`mx-1 w-6 h-6 flex cursor-pointer text-center justify-center items-center ${numeroPagina + 1 === paginaActual
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
