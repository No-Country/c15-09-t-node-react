import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeRecipe } from "../redux/actions/userActions";

export const RecipeFavorites = () => {
  //TODO: temporal por ahora hasta que el endpoint de autentication este
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let { Recetas: userRecipes } = user;

  const handleRemoveRecipe = (recipeId) => {
    dispatch(removeRecipe(recipeId));
  };

  // para debuggear
  console.log("Favorite recipes:", userRecipes);

  if (userRecipes == null) {
    return <h1>No se encontraron recetas favoritas</h1>;
  } else {
    return (
      <div className="w-full flex mt-8">
        {userRecipes.map((recipe) => {
          return (
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
                onClick={() => handleRemoveRecipe(recipe.id)}
              >
                Quitar de favoritos
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};
