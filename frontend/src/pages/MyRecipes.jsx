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

  if (userRecipes == null) {
    return <h1>No se encontraron recetas favoritas</h1>;
  } else {
    return (
      <div className="w-full flex justify-between mt-8 font-poppings">
        {userRecipes.map((recipe) => {
          return (
            <div key={recipe.id} className="shadow-lg w-[47.5%] bg-stone-100">
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
                    Punk IPA clone from the GF recipe library, this came out as close to an original
                    beer that Ive brewed, genuinely nice beer, looks, smells, and most importantly
                    tastes pretty close to the original...
                  </p>{" "}
                  <Link
                    to={`/app/recipe/${recipe.id}`}
                    className="block w-full text-center bg-secondary hover:bg-primary font-bold transition-colors text-white py-2"
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
