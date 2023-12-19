import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { getAllStyles } from "../services/styles";
import imagenEstilos from "../assets/images/imageRegister.png";


export const CardIndex = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllStyles().then((data) => {
            const dataFiltrada = data.slice(0, 5)
            setData(dataFiltrada)
        });
    }, []);



    return (
        <div className="flex items-center flex-col mt-16 ">
            <h1 className="font-homemade my-10  text-center"> Estilos de Cervezas</h1>
            <div className="flex gap-x-10 gap-y-5 flex-wrap justify-center">
                {data.map((estilo, index) => (
                    <div key={index}>
                        {" "}
                        <Link to={"/app/styles"}>
                            <div className="w-48 hover:scale-110 transition-transform rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={imagenEstilos} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div className="font-bold  text-xl mb-2">{estilo.name}</div>
                                    <p className="text-gray-700 text-base">{estilo.category}</p>
                                </div>
                            </div>{" "}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )

}

