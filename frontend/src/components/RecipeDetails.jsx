import ZoomImage from "./ZoomImage";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { getRecetaById } from "../services/recipes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLevaduraById } from "../services/ingredients/levadura";
import { getLupuloById } from "../services/ingredients/lupulo";
import { getMaltaById } from "../services/ingredients/malta";
import {
  addFavoriteToUser,
  getFavoritesFromUser,
  removeFavoriteFromUser,
} from "../services/favorites";
import { useSelector } from "react-redux";

export const RecipeDetails = () => {
  const user = useSelector((state) => state.user);
  const params = useParams();
  const [receta, setReceta] = useState({});
  const [levadurasReceta, setLevadurasReceta] = useState([]);
  const [fermentablesReceta, setFermentablesReceta] = useState([]);
  const [lupulosReceta, setLupulosReceta] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const getData = async () => {
    const recetaDB = await getRecetaById(params.id);
    setReceta(recetaDB);
    // esto funciona bien
    getFavoritesFromUser(user.userID).then((data) => {
      setFavoriteRecipes(data);
    });
    await getOtherData(recetaDB.LevadurasReceta, recetaDB.Fermentables, recetaDB.LupulosReceta);
  };

  const getOtherData = async (levadurasRecetaData, fermentablesRecetaData, lupulosRecetaData) => {
    console.log({ levadurasRecetaData, fermentablesRecetaData, lupulosReceta });
    const levadurasPromises = levadurasRecetaData.map((item) => {
      return getLevaduraById(item.LevaduraId);
    });

    const FermentablesPromises = fermentablesRecetaData.map((item) => {
      if (!item.MaltaId) return {};

      return getMaltaById(item.MaltaId);
    });

    const LupulosPromises = lupulosRecetaData.map((item) => {
      return getLupuloById(item.LupuloId);
    });

    const levaduras = await Promise.all(levadurasPromises);
    setLevadurasReceta(levaduras);

    const fermentables = await Promise.all(FermentablesPromises);
    setFermentablesReceta(fermentables);

    const lupulos = await Promise.all(LupulosPromises);
    setLupulosReceta(lupulos);
  };

  function isRecipeFavorite(recipeId, favoriteRecipes) {
    return favoriteRecipes.some((recipe) => recipe.id == recipeId);
  }

  function handleAddFavoriteToUser() {
    addFavoriteToUser(user.userID, parseInt(params.id))
      .then(() => setIsFavorite(!isFavorite))
      .catch((e) => console.log(e));
  }

  function handleRemoveFavoriteFromUser() {
    removeFavoriteFromUser(user.userID, parseInt(params.id))
      .then(() => setIsFavorite(!isFavorite))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorite]);

  useEffect(() => {
    // Llamar a isRecipeFavorite después de actualizar favoriteRecipes
    setIsFavorite(isRecipeFavorite(params.id, favoriteRecipes));
  }, [params.id, favoriteRecipes, isFavorite]);

  return (
    <div>
      <div className=" mt-9 rounded-xl overflow-hidden h-96 relative flex justify-center items-center">
        {" "}
        <img
          src="https://wallpapers.com/images/hd/beer-bottles-at-sunset-j8akxlz8u85f58j3.jpg"
          alt=""
        />
      </div>

      <div>
        <div className="container font-poppings">
          <main className="flex mt-2 md:mt-16">
            <div className=" max-w-full">
              <div>
                <div className=" flex flex-col ">
                  <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="flex flex-col  mb-8 order-2 px-5 md:px-0">
                      <div className="">
                        <h2 className=" mx-auto text-center  text-4xl  font-bold  ">
                          {receta.name}{" "}
                          {isFavorite === false ? (
                            <FavoriteBorderIcon
                              className="scale-150 text-red-900"
                              onClick={() => {
                                handleAddFavoriteToUser();
                              }}
                            />
                          ) : (
                            <FavoriteIcon
                              className="scale-150 text-red-900"
                              onClick={() => {
                                handleRemoveFavoriteFromUser();
                              }}
                            />
                          )}
                        </h2>
                      </div>

                      <h4 className="text-center text-[#f08649] font-bold text-2xl first-letter: ">
                        Autor: {receta?.author}
                      </h4>

                      <div className="flex  flex-col md:flex-row mt-10 order-3 md:order-2">
                        <div className="min-w-[280px]">
                          <div className="group ">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:opacity-100">
                              {" "}
                              &#x1F376; Fermentables
                            </h3>
                            <ul className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400">
                              {fermentablesReceta?.map((fermentable, i) => (
                                <li key={i} className="mb-1">
                                  {receta.Fermentables[i].cantidad} lbs - {fermentable.name} (
                                  {fermentable.color} SRM)
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="group">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:opacity-100 ">
                              {" "}
                              &#x1F33F; Lúpulos
                            </h3>

                            {lupulosReceta.map((hop, i) => (
                              <div
                                key={i}
                                className="mb-1 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400"
                              >
                                <p className="text-lg font-semibold"> {hop.name} </p>
                                <p> Cantidad: {receta.LupulosReceta[i].cantidad}</p>
                                <p>Uso: {receta.LupulosReceta[i].uso}</p>
                                <p>Tiempo: {receta.LupulosReceta[i].tiempo}</p>
                                <p>Ibu: {receta.LupulosReceta[i].ibu}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="min-w-[280px]">
                          <div className="group">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:opacity-100 ">
                              {" "}
                              &#x1F35E; Levadura
                            </h3>
                            <ul className="mb-1 opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400">
                              {levadurasReceta?.map((yeast, yeastIndex) => (
                                <li key={yeastIndex} className="mb-1">
                                  {yeast.name} - Cantidad:{" "}
                                  {receta.LevadurasReceta[yeastIndex].cantidad} - Tipo: {yeast.name}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="group">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:opacity-100 ">
                              {" "}
                              &#x1F4CC; Adiciones
                            </h3>
                            <ul className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400">
                              {receta?.AdicionesReceta?.map((misc, miscIndex) => (
                                <li key={miscIndex} className="mb-1">
                                  {misc.name} - Tipo: {misc.type} - Cantidad: {misc.amount} -
                                  Unidad: {misc.unit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="min-w-[280px]">
                          <div className="group">
                            <h3 className="text-2xl font-semibold mb-2 group-hover:opacity-100 ">
                              {" "}
                              &#x1F321; Maceración
                            </h3>
                            <ul className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400">
                              {receta.mashTime && (
                                <li className="mb-1">
                                  {receta.mashTemperature}° - Tiempo: {receta.mashTime}
                                </li>
                              )}

                              {receta.mashOutTime && (
                                <li className="mb-1">
                                  Mash Out {receta.mashOutTemperature}º - Tiempo:{" "}
                                  {receta.mashOutTime}
                                </li>
                              )}
                            </ul>
                          </div>

                          <div className="group">
                            <h3 className="text-2xl w-[230px] font-semibold mb-2 group-hover:opacity-100 ">
                              &#x1F377; Fermentación
                            </h3>
                            <ul className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto group-hover:overflow-visible transition-opacity duration-400">
                              {receta.primaryFermentationTime && (
                                <li className="mb-1">
                                  Primary - {receta.primaryFermentationTemperature}° - Tiempo:{" "}
                                  {receta.primaryFermentationTime}
                                </li>
                              )}

                              {receta.seccondaryFermentationTime && (
                                <li className="mb-1">
                                  Secondary - {receta.primaryFermentationTime}º - Tiempo:{" "}
                                  {receta.seccondaryFermentationTime}
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="order-1 md:order-3 p-10">
                        <div className="mb-8 mt-10">
                          <h6 className="text-xl font-semibold my-2  ">
                            {" "}
                            <ImportContactsIcon /> Información General{" "}
                          </h6>
                          <p>Tipo: {receta.type}</p>
                          <p>ABV: {receta.alcoholByVolume}%</p>
                          <p>OG: {receta.originalGravity}</p>
                          <p>FG: {receta.finalGravity}</p>
                          <p>IBU: {receta.ibu}</p>
                          <p>Color: {receta.colorSRM}</p>
                          <p>Tamano de Lote: {receta.batchSize}</p>
                          <p>Volumen de Agua de Maceracion: {receta.spargeWaterAmount}</p>
                          <p>Volumen de Agua de Lavado: {receta.mashWaterAmount}</p>
                          <p>Tamaño del Hervor: {receta.boilSize}</p>
                          <p>Tiempo de Hervor: {receta.boilTime}</p>
                        </div>

                        <div className="mb-8">
                          <p className="text-xl font-semibold mb-2 ">
                            {" "}
                            <ChecklistIcon /> Notas
                          </p>
                          <span>{receta.notes}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-full order-1 mb-6 md:order-3 md:mb-0">
                      <ZoomImage
                        src={receta.image}
                        className="rounded-xl  "
                        alt="Zoomable Image"
                        zoomArea={{ x: 1, y: 1, width: 1, height: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
