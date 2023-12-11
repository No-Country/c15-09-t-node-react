import { Link } from "react-router-dom"


export const Recipe = () => {
    const recetas = [
        {
            imagen: "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
            nombre: "Corona",
            parrafo: "Descripción corta del objeto 1.",
        },
        {
            imagen: "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
            nombre: "Coors",
            parrafo: "Descripción corta del objeto 2.",
        },
        {
            imagen: "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
            nombre: "Zulia",
            parrafo: "Descripción corta del objeto 3.",
        },
        {
            imagen: "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
            nombre: "Quilmes",
            parrafo: "Descripción corta del objeto 4.",
        },
    ]
    return (
        <div className="flex items-center flex-col mt-8 ">
            <h1 className="font-homemade my-10 self-start">Recetas</h1>
            <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
                {recetas.map((receta, index) => (
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
        </div>


    )







}