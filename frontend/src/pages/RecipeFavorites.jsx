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
    getFavoritesFromUser(user.userID)
      .then((data) => {
        setFavoriteRecipes(data);
      })
      .catch((e) => console.log(e));
  }, [user.userID]);

  const handleRemoveRecipe = (recipeId) => {
    removeFavoriteFromUser(user.userID, recipeId).then(() => {
      // After successfully removing a favorite, re-fetch the favorites
      getFavoritesFromUser(user.userID)
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
      <div className="w-full h-auto flex flex-col lg:flex-row lg:justify-between mt-8 font-poppings">
        {favoriteRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="shadow-lg mb-14 w-full lg:w-[47.5%] bg-stone-100">
              <Link to={`/app/recipe/${recipe.id}`}>
                <div className="rounded flex justify-center w-full">
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
                    <p className="mb-5">
                      Punk IPA clone from the GF recipe library, this came out as close to an
                      original beer that Ive brewed, genuinely nice beer, looks, smells, and most
                      importantly tastes pretty close to the original...
                    </p>{" "}
                    <Link
                      to={`/app/recipe/${recipe.id}`}
                      className="block w-full text-center bg-secondary hover:bg-primary font-bold transition-colors text-white py-2"
                    >
                      Entrar
                    </Link>
                    <button
                      className="w-full text-center bg-red-900 font-bold hover:bg-zinc-600 transition-colors text-white py-2 mt-2"
                      onClick={() => handleRemoveRecipe(recipe.id)}
                    >
                      Quitar de favoritos
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
};
