import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFavoritesFromUser } from "../services/favorites";

export const RecipeFavorites = () => {
  // temporal por ahora hasta que el endpoint de login

  const [userId] = useState(9);
  const [recipesFavorites, setRecipesFavorites] = useState([]);

  useEffect(() => {
    getFavoritesFromUser(userId).then((data) => setRecipesFavorites(data.data["Recetas"]));
  });

  const handleDeleteFavorite = (id) => {
    setRecipesFavorites(recipesFavorites.filter((recipe) => recipe.id !== id));
  };

  if (recipesFavorites === []) {
    return <h1>No se encontraron recetas favoritas</h1>;
  } else {
    return (
      <div className="w-full flex mt-8">
        {recipesFavorites.map((recipe) => (
          <div key={recipe.id} className="shadow-lg">
            <Link to={"/app/recipedetails"}>
              <div className="w-48 rounded overflow-hidden">
                <img className="h-48 w-full" src={recipe.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold font-homemade text-xl mb-2">{recipe.name}</div>
                  <p className="text-gray-700 text-base">{recipe.author}</p>
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
  }
};
