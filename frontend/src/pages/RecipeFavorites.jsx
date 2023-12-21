import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const RecipeFavorites = () => {
  // temporal por ahora hasta que el endpoint de autentication este
  const user = useSelector((state) => state.user);

  let { Recetas: userRecipes } = user;

  useEffect(() => {});

  const handleDeleteFavorite = (id) => {
    userRecipes = userRecipes.filter((recipe) => recipe.id !== id);
  };

  // para debuggear
  console.log("Favorite recipes:", userRecipes);

  if (userRecipes == null) {
    return <h1>No se encontraron recetas favoritas</h1>;
  } else {
    return (
      <div className="w-full flex mt-8 flex-wrap justify-center gap-10">
        {userRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="shadow-lg ">
              <Link to={`/app/recipedetails/${recipe.id}`}>
                <div className="w-48 flex flex-col justify-between hover:scale-110 transition-transform rounded h-full overflow-hidden shadow-lg">
                  <img
                    className="h-48 w-full object-cover"
                    src={recipe.image}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold font-homemade text-xl mb-2">{recipe.name}</div>
                    <p className="text-gray-700 text-base">{recipe.author}</p>
                  </div>
                  <button
                    className="w-full text-center bg-primary hover:bg-zinc-600 transition-colors text-white py-2"
                    onClick={() => handleDeleteFavorite(recipe.id)}
                  >
                    Quitar de favoritos
                  </button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};
