import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFavoritesFromUser, removeFavoriteFromUser } from "../services/favorites";
import { useEffect, useState } from "react";
import "./RecipeFavorites.css";

export const RecipeFavorites = () => {
  const user = useSelector((state) => state.user);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // TODO: agregar que no se en contraron recetas si favoriteRecipes is empty

  useEffect(() => {
    getFavoritesFromUser(user.id)
      .then((data) => {
        setFavoriteRecipes(data);
        console.log(favoriteRecipes);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const handleRemoveRecipe = (recipeId) => {
    removeFavoriteFromUser(user.id, recipeId).then(() => {
      // After successfully removing a favorite, re-fetch the favorites
      getFavoritesFromUser(user.id)
        .then((data) => {
          setFavoriteRecipes(data);
        })
        .catch((e) => console.log(e));
    });
  };
  if (favoriteRecipes == null) {
    return <h1>No se encontraron recetas favoritas</h1>;
  } else {
    return (
      <div className="md:w-full h-auto flex flex-col lg:flex-row lg:justify-between mt-8 font-poppings flex-wrap mx-6 md:mx-0">
        {favoriteRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="shadow-lg mb-14 w-full lg:w-[47.5%] bg-stone-100">
              <div className="rounded flex  w-full">
                <div
                  style={{
                    backgroundImage: `url(${recipe.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="bg-cover w-[40%]"
                  aria-label={recipe.name}
                ></div>
                <div className="pl-8 pt-8 pb-5 w-1/2 text-stone-800">
                  <div className="mb-6 pb-6 border-b-2 border-stone-600">
                    <h1 className="font-bold text-2xl mb-1">{recipe.name}</h1>
                    <p className="font-semibold text-base">{recipe.author}</p>
                  </div>
                  <p className="mb-5"></p>{" "}
                  <Link
                    to={`/app/recipe/${recipe.id}`}
                    className="block w-full text-center bg-mostaza hover:bg-[#c39803] font-bold transition-colors text-white py-2"
                  >
                    Entrar
                  </Link>
                  <button
                    className="w-full text-center bg-primary font-bold hover:bg-secondary transition-colors text-white py-2 mt-2"
                    onClick={() => handleRemoveRecipe(recipe.id)}
                  >
                    Quitar de favoritos
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
