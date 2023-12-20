import { useState } from "react";
import { LupulosSection } from "./createBeerComponents/LupulosSection";
import { FermentablesSection } from "./createBeerComponents/FermentablesSection";
import { LevadurasSection } from "./createBeerComponents/LevadurasSection";
import { AdicionesSection } from "./createBeerComponents/AdicionesSection";
import bgForm from "../assets/images/bgForm.jpg";

export const Create = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    author: "",
    image: "",
    type: "All Grain",
    alcoholByVolume: 0.0,
    originalGravity: "",
    finalGravity: "",
    ibu: "",
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
    style: "",
    UserID: "",
    fermentables: [
      {
        MaltaId: "",
        quantity: "",
      },
    ],
    lupulos: [
      {
        LupuloId: "",
        quantity: "",
        alphaAcids: "",
        additionTime: "",
        bitterness: "",
      },
    ],
    levadura: [
      {
        LevaduraId: "",
        quantity: "",
      },
    ],
    adiciones: [
      {
        name: "",
        type: "",
        quantity: "",
        unit: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(recipeData);
  };

  return (
    <div className="w-full mt-5 ">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-around md:gap-5 p-4  ">
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
            Imagen
            <input
              className="mt-1 p-2  rounded-md w-full"
              placeholder="URL"
              name="image"
              type="file"
              value={recipeData.image}
              onChange={handleChange}
            />
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Alcohol por Volumen
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
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              className="mt-1 p-2 border rounded-md w-full text-black "
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
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              className="mt-1 p-2 border rounded-md w-full text-black "
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
            Tamaño del Lote
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
            Volumen de Agua de Maceración
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
            Volumen de Agua de Lavado
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
            Tamaño del Hervor
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
            Tiempo del Hervor
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
              name="style"
              value={recipeData.style}
              onChange={handleChange}
            >
              <option value="">Selecciona un estilo</option>
              <option value="Ale">Ale</option>
              <option value="Lager">Lager</option>
              <option value="Stout">Stout</option>
              <option value="Porter">Porter</option>
              <option value="Pilsner">Pilsner</option>
              <option value="IPA">India Pale Ale (IPA)</option>
              <option value="APA">American Pale Ale (APA)</option>
              <option value="DIPA">Double IPA (DIPA)</option>
              <option value="Wheat Beer">Cerveza de Trigo</option>
              <option value="Saison">Saison</option>
              <option value="Belgian Dubbel">Belgian Dubbel</option>
              <option value="Belgian Tripel">Belgian Tripel</option>
              <option value="Belgian Quad">Belgian Quad</option>
            </select>
          </label>

          <label className=" w-full mb-4 block text-lg font-medium">
            Temperatura Macerado (°C)
            <input
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              className="mt-1 p-2 border rounded-md w-full text-black "
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
              className="mt-1 p-2 border rounded-md w-full text-black"
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
              className="mt-1 p-2 border rounded-md w-full text-black "
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
              className="mt-1 p-2 border rounded-md w-full text-black"
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
