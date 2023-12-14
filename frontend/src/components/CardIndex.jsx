import { Link } from "react-router-dom"

export const CardIndex = () => {


    const estilos = [
        {
            imagen: "https://www.elcaminodelacerveza.com/wp-content/uploads/2020/07/Strange-2-650x500.jpg",
            nombre: "Corona",
            parrafo: "Cerveza robusta con notas citricas",
        },
        {
            imagen: "https://www.elcaminodelacerveza.com/wp-content/uploads/2020/07/Strange-2-650x500.jpg",
            nombre: "Ipa",
            parrafo: "Descripción corta del objeto 1.",
        },
        {
            imagen: "https://www.elcaminodelacerveza.com/wp-content/uploads/2020/07/Strange-2-650x500.jpg",
            nombre: "Amber",
            parrafo: "Descripción corta del objeto 1.",
        },
        {
            imagen: "https://www.elcaminodelacerveza.com/wp-content/uploads/2020/07/Strange-2-650x500.jpg",
            nombre: "Honey",
            parrafo: "Descripción corta del objeto 1.",
        },
        {
            imagen: "https://www.elcaminodelacerveza.com/wp-content/uploads/2020/07/Strange-2-650x500.jpg",
            nombre: "Corona",
            parrafo: "Descripción corta del objeto 1.",
        },
    ]
    return (
        <div className="flex items-center flex-col mt-16 ">
            <h1 className="font-homemade my-10  text-center"> Estilos de Cervezas</h1>
            <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
                {estilos.map((estilo, index) => (
                    <div key={index}>
                        {" "}
                        <Link to={"/app/styles"}>
                            <div className="w-48 hover:scale-110 transition-transform rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={estilo.imagen} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold  text-xl mb-2">{estilo.nombre}</div>
                                    <p className="text-gray-700 text-base">{estilo.parrafo}</p>
                                </div>
                            </div>{" "}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}

