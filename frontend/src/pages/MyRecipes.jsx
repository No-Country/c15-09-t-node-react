import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRecetasFromUser } from "../services/recipes";
import { useEffect, useState } from "react";
import "./RecipeFavorites.css";

export const MyRecipes = () => {
  const user = useSelector((state) => state.user);
  const [userRecipes, setUserRecipes] = useState([]);

  useEffect(() => {
    // TODO: no tengo la id del user, cuando normalicen la info que me dan lo arreglo
    getRecetasFromUser(user.id)
      .then((data) => {
        setUserRecipes(data);
      })
      .catch((e) => console.log(e));
  }, [user.id]);

  if (userRecipes == null || userRecipes.length === 0) {
    return (
      <div className="w-full flex-col flex mt-8 font-poppings">
        <h1 className="text-center mx-auto w-8/12">No se encontraron recetas propias.</h1>
      </div>
    );
  } else {
    return (
      <div className="md:w-full h-auto flex flex-col lg:flex-row lg:justify-between mt-8 font-poppings flex-wrap mx-6 md:mx-0">
        {userRecipes.map((recipe) => {
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
