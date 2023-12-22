import { useState, useEffect } from "react";
import { LupulosSection } from "./createBeerComponents/LupulosSection";
import { FermentablesSection } from "./createBeerComponents/FermentablesSection";
import { LevadurasSection } from "./createBeerComponents/LevadurasSection";
import { AdicionesSection } from "./createBeerComponents/AdicionesSection";
import bgForm from "../assets/images/bgForm.jpg";
import { getAllStyles } from "../services/styles";
import { useSelector } from "react-redux";

export const Create = () => {
  const user = useSelector((state) => state.user);
  const [estilos, setEstilos] = useState([]);
  useEffect(() => {
    getAllStyles().then((data) => setEstilos(data));
  }, []);

  // const [recipeData, setRecipeData] = useState({
  //   name: "Cerveza Tester",
  //   author: "Julian Crack",
  //   image: "https://i.imgur.com/GcJYO3Y.jpeg",
  //   type: "All Grain",
  //   alcoholByVolume: 6.5,
  //   originalGravity: 1060.03,
  //   finalGravity: 1.007,
  //   ibu: 108.0,
  //   colorSRM: 7,
  //   batchSize: 23,
  //   mashWaterAmount: 23.86,
  //   spargeWaterAmount: 13.66,
  //   boilSize: 25,
  //   boilTime: 60,
  //   mashTemperature: 66,
  //   mashTime: 75,
  //   mashOutTemperature: 75,
  //   mashOutTime: 10,
  //   primaryFermentationTemperature: 18,
  //   primaryFermentationTime: 10,
  //   seccondaryFermentationTemperature: null,
  //   seccondaryFermentationTime: null,
  //   notes: "Cerveza creada por el equipo de No Country para The Brewer's Cookbook.",
  //   EstiloId: 56,
  //   UserId: user.id,
  //   fermentables: [
  //     {
  //       MaltaId: 5,
  //       cantidad: 3.0,
  //     },
  //     {
  //       MaltaId: 9,
  //       cantidad: 5.5,
  //     },
  //   ],
  //   lupulos: [
  //     {
  //       LupuloId: 5,
  //       cantidad: 23.0,
  //       uso: "Boil",
  //       tiempo: 60,
  //       ibu: 38,
  //     },
  //     {
  //       LupuloId: 10,
  //       cantidad: 10.7,
  //       uso: "Dry Hop",
  //       tiempo: 5,
  //       ibu: 0,
  //     },
  //   ],
  //   levadura: [
  //     {
  //       LevaduraId: 1,
  //       cantidad: 1,
  //     },
  //   ],
  //   adiciones: [],
  // });
  const [uploadMessage, setUploadMessage] = useState(null);

  const [recipeData, setRecipeData] = useState({
    name: "",
    author: "",
    image: "",
    type: "All Grain",
    alcoholByVolume: "",
    originalGravity: "",
    finalGravity: "",
    ibu: "",
    colorSRM: "",
    batchSize: "",
    mashWaterAmount: "",
    spargeWaterAmount: "",
    boilSize: "",
    boilTime: "",
    mashTemperature: "",
    mashTime: "",
    mashOutTemperature: "",
    mashOutTime: "",
    primaryFermentationTemperature: "",
    primaryFermentationTime: "",
    seccondaryFermentationTemperature: "",
    seccondaryFermentationTime: "",
    notes: "",
    EstiloId: "",
    UserId: user.id,
    fermentables: [
      {
        MaltaId: "",
        cantidad: "",
      },
    ],
    lupulos: [
      {
        LupuloId: "",
        cantidad: "",
        uso: "",
        tiempo: "",
        ibu: "",
      },
    ],
    levadura: [
      {
        LevaduraId: "",
        cantidad: "",
      },
    ],
    adiciones: [
      {
        name: "",
        type: "",
        amount: "",
        unit: "",
        notes: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (response.ok) {
        console.log("Receta enviada con éxito");
        // Puedes redirigir o realizar otras acciones después de enviar con éxito
      } else {
        console.error("Error al enviar la receta:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
    console.log(recipeData);
  };

  const handlePicture = async () => {
    try {
      const formData = new FormData();
      formData.append("image", recipeData.image);

      const response = await fetch(
        "https://brewerscookbookserver-dev-tear.2.us-1.fl0.io/recetas/img",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const imageUrl = await response.text(); // Obtener el enlace directamente

        console.log("Imagen subida con éxito. Enlace:", imageUrl);

        // Eliminar comillas adicionales y actualizar el estado con el mensaje de éxito
        setUploadMessage("Imagen subida con éxito.");

        // Eliminar comillas adicionales y actualizar el estado con la URL de la imagen
        setRecipeData({
          ...recipeData,
          image: imageUrl.replace(/['"]+/g, ""), // Eliminar comillas adicionales
        });
      } else {
        console.error("Error al subir la imagen:", response.status, response.statusText);

        // Actualizar el estado con el mensaje de error
        setUploadMessage("Error al subir la imagen. Por favor, intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message);

      // Actualizar el estado con el mensaje de error
      setUploadMessage("Error en la solicitud. Por favor, intenta nuevamente.");
    }
  };

  return (
    <div className="w-full mt-5 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-around md:gap-5 p-4"
        method="POST"
        encType="multipart/form-data"
      >
        <img
          className=" mt-9 rounded-xl overflow-hidden mb-4  flex justify-center items-center  w-full md:px-0"
          src={bgForm}
          alt=""
        />
        <div className="md:w-1/3 w-96 ">
          <label className="w-full mb-4 block text-lg font-medium ">
            Nombre de la Cerveza
            <input
              className="mt-1 p-2 border-2 text-black  border-gray-light rounded-md w-full "
              placeholder="Chocolat Coffe Stout"
              type="text"
              name="name"
              value={recipeData.name}
              onChange={handleChange}
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Autor
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              placeholder="Louis Pasteur"
              name="author"
              type="text"
              value={recipeData.author}
              onChange={handleChange}
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            ColorSRM
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              placeholder="Louis Pasteur"
              name="colorSRM"
              type="text"
              value={recipeData.colorSRM}
              onChange={handleChange}
            />
          </label>

          <label className="flex flex-col mb-4 text-lg font-medium">
            Imagen
            <input
              className="mt-1 border-2 text-black border-gray-light rounded-md w-full"
              id="default_size"
              type="file"
              name="image"
              onChange={(e) => {
                const file = e.target.files[0];
                setRecipeData({
                  ...recipeData,
                  image: file,
                });
              }}
            />
          </label>
          {uploadMessage && (
            <div
              className={`text-center p-2 ${
                uploadMessage.includes("éxito") ? "text-green-500" : "text-red-500"
              }`}
            >
              {uploadMessage}
            </div>
          )}

          <button
            type="button"
            onClick={handlePicture}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Subir Foto
          </button>

          <label className=" w-full mb-4 block text-lg font-medium">
            Alcohol por Volumen %
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="alcoholByVolume"
              type="number"
              pattern="[0-9]+([.][0-9]+)?"
              value={recipeData.alcoholByVolume}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Gravedad Original
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="originalGravity"
              type="number"
              value={recipeData.originalGravity}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Gravedad Final
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="finalGravity"
              type="number"
              value={recipeData.finalGravity}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Unidades Internacionales de Amargor
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="ibu"
              type="number"
              value={recipeData.ibu}
              onChange={handleChange}
              placeholder="0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Temperatura Fermentacion Primaria (°C)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="primaryFermentationTemperature"
              type="number"
              value={recipeData.primaryFermentationTemperature}
              onChange={handleChange}
              placeholder="0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Tiempo Fermentacion Primaria (Dias)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full "
              name="primaryFermentationTime"
              type="number"
              value={recipeData.primaryFermentationTime}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Temperatura Fermentacion Secundaria (°C)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="seccondaryFermentationTemperature"
              type="number"
              value={recipeData.seccondaryFermentationTemperature}
              onChange={handleChange}
              placeholder="0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Tiempo Fermentacion Secundaria (Dias)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full "
              name="seccondaryFermentationTime"
              type="number"
              value={recipeData.seccondaryFermentationTime}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>
        </div>
        <div className="md:w-1/3 w-96">
          <label className=" w-full mb-4 block text-lg font-medium">
            Tamaño del Lote (lts)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="batchSize"
              type="number"
              value={recipeData.batchSize}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className="w-full mb-4 block text-lg font-medium">
            Volumen de Agua de Maceración(lts)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="mashWaterAmount"
              type="number"
              value={recipeData.mashWaterAmount}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Volumen de Agua de Lavado(lts)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="spargeWaterAmount"
              type="number"
              value={recipeData.spargeWaterAmount}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Volumen de Hervor(lts)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="boilSize"
              type="number"
              value={recipeData.boilSize}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Tiempo de Hervor(min)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="boilTime"
              type="number"
              value={recipeData.boilTime}
              onChange={handleChange}
              placeholder="10 minutos"
            />
          </label>

          <label className="w-full mb-4 block text-lg font-medium">
            Estilo
            <select
              className="mt-1 p-2 border-2  border-gray-light rounded-md w-full text-black"
              name="EstiloId"
              value={recipeData.EstiloId}
              onChange={handleChange}
            >
              <option value="">Selecciona un estilo</option>
              {estilos.map((estilo) => (
                <option key={estilo.id} value={estilo.id}>
                  {estilo.name}
                </option>
              ))}
            </select>
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Temperatura Macerado (°C)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="mashTemperature"
              type="number"
              value={recipeData.mashTemperature}
              onChange={handleChange}
              placeholder="0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Tiempo Macerado (min)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full "
              name="mashTime"
              type="number"
              value={recipeData.mashTime}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Temperatura Mash Out (°C)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="mashOutTemperature"
              type="number"
              value={recipeData.mashOutTemperature}
              onChange={handleChange}
              placeholder="0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Tiempo Mash Out (min)
            <input
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full "
              name="mashOutTime"
              type="number"
              value={recipeData.mashOutTime}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>
          <label className=" w-full mb-4 block text-lg font-medium">
            Nota
            <textarea
              className="mt-1 p-2 border-2 text-black border-gray-light rounded-md w-full"
              name="notes"
              value={recipeData.notes}
              onChange={handleChange}
              placeholder="Comentario adicional"
            />
          </label>
        </div>
        {/* FERMENTABLES */}
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="bg-[#F9E79F] text-[#D35400] font-bold flex rounded-lg">
            <FermentablesSection
              fermentables={recipeData.fermentables}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
            />
          </div>

          {/* LUPULOS */}
          <div className="bg-[#F9E79F] text-[#D35400] font-bold flex rounded-lg">
            <LupulosSection
              lupulos={recipeData.lupulos}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
            />
          </div>

          {/* LEVADURA */}
          <div className="bg-[#F9E79F] text-[#D35400] font-bold flex rounded-lg">
            <LevadurasSection
              levadura={recipeData.levadura}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
            />
          </div>

          {/* ADICIONES */}
          <div className="bg-[#F9E79F] text-[#D35400] font-bold flex rounded-lg">
            <AdicionesSection
              adiciones={recipeData.adiciones}
              recipeData={recipeData}
              setRecipeData={setRecipeData}
            />
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="p-2 bg-[#1E8449] hover:bg-[#145A32] text-white rounded-md"
            type="submit"
          >
            Enviar Receta
          </button>
        </div>
      </form>
    </div>
  );
};
