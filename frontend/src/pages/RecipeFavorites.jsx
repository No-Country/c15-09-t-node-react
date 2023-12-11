import { useState } from "react";
import { Link } from "react-router-dom";

export const RecipeFavorites = () => {
  const [recipesFavorites, setRecipesFavorites] = useState([
    {
      id: 61651,
      imagen:
        "https://cibart.com.ar/wp-content/uploads/2021/04/Curso-de-Elaboracion-de-Cervezas-Libres-de-Gluten-Modalidad-Online-1.png",
      nombre: "Corona",
      parrafo: "Descripción corta del objeto 1.",
    },
  ]);

  const handleDeleteFavorite = (id) => {
    setRecipesFavorites(recipesFavorites.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="w-full flex mt-8">
      {recipesFavorites.map((recipe) => (
        <div key={recipe.id} className="shadow-lg">
          <Link to={"/app/recipedetails"}>
            <div className="w-48 rounded overflow-hidden">
              <img className="w-full" src={recipe.imagen} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold font-homemade text-xl mb-2">{recipe.nombre}</div>
                <p className="text-gray-700 text-base">{recipe.parrafo}</p>
              </div>
            </div>
          </Link>

          <button
            className="w-full text-center bg-gray-dark hover:bg-zinc-600 transition-colors text-white py-2"
            onClick={() => handleDeleteFavorite(recipe.id)}
          >
            Quitar de favoritos
          </button>
        </div>
      ))}
    </div>
  );
};
