import { useState } from "react";
import { LupulosSection } from "./createBeerComponents/LupulosSection";
import { FermentablesSection } from "./createBeerComponents/FermentablesSection";
import { LevadurasSection } from "./createBeerComponents/LevadurasSection";
import { AdicionesSection } from "./createBeerComponents/AdicionesSection";
import { MaceracionSection } from "./createBeerComponents/MaceracionSection";
import { FermentacionSection } from "./createBeerComponents/FermentacionSection";

export const Create = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    author: "",
    image: "",
    abv: 0.0,
    og: "",
    fg: "",
    ibu: "",
    batchSize: "",
    volumenAguaMaceracion: "",
    volumenAguaLavado: "",
    boilSize: "",
    boilTime: "",
    style: "",
    note: "",
    fermentables: [
      {
        name: "",
        quantity: "",
        color: "",
      },
    ],
    lupulos: [
      {
        name: "",
        quantity: "",
        alphaAcids: "",
        additionTime: "",
        bitterness: "",
      },
    ],
    levadura: [
      {
        name: "",
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
    maceracion: [
      {
        temperature: "",
        time: "",
      },
    ],
    fermentacion: [
      {
        type: "",
        temperature: "",
        time: "",
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

  const getLabel = (fieldName) => {
    const unitLabel = recipeData.unitSystem === "metric" ? "(litros)" : "(galones)";
    return `Cantidad ${unitLabel} de ${fieldName}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la receta:", recipeData);
  };
  // Fermentables
  const handleChangeFermentable = (e, index) => {
    const { name, value } = e.target;
    const updatedFermentables = [...recipeData.fermentables];
    updatedFermentables[index] = {
      ...updatedFermentables[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      fermentables: updatedFermentables,
    });
  };

  const handleAddFermentable = () => {
    setRecipeData({
      ...recipeData,
      fermentables: [...recipeData.fermentables, { name: "", quantity: "", color: "" }],
    });
  };

  const handleRemoveFermentable = (index) => {
    const updatedFermentables = [...recipeData.fermentables];
    updatedFermentables.splice(index, 1);

    setRecipeData({
      ...recipeData,
      fermentables: updatedFermentables,
    });
  };

  // Lupulos

  const handleChangeLupulos = (e, index) => {
    const { name, value } = e.target;
    const updatedLupulos = [...recipeData.lupulos];
    updatedLupulos[index] = {
      ...updatedLupulos[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      lupulos: updatedLupulos,
    });
  };

  const handleAddLupulos = () => {
    setRecipeData({
      ...recipeData,
      lupulos: [
        ...recipeData.lupulos,
        {
          name: "",
          quantity: "",
          alphaAcids: "",
          additionTime: "",
          bitterness: "",
        },
      ],
    });
  };

  const handleRemoveLupulos = (index) => {
    const updatedLupulos = [...recipeData.lupulos];
    updatedLupulos.splice(index, 1);

    setRecipeData({
      ...recipeData,
      lupulos: updatedLupulos,
    });
  };

  //Levadura
  const handleChangeLevadura = (e, index) => {
    const { name, value } = e.target;
    const updatedLevadura = [...recipeData.levadura];
    updatedLevadura[index] = {
      ...updatedLevadura[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      levadura: updatedLevadura,
    });
  };

  const handleAddLevadura = () => {
    setRecipeData({
      ...recipeData,
      levadura: [
        ...recipeData.levadura,
        {
          name: "",
          type: "",
          quantity: "",
        },
      ],
    });
  };

  const handleRemoveLevadura = (index) => {
    const updatedLevadura = [...recipeData.levadura];
    updatedLevadura.splice(index, 1);

    setRecipeData({
      ...recipeData,
      levadura: updatedLevadura,
    });
  };

  //Ingredientes adicionales

  const handleChangeAdiciones = (e, index) => {
    const { name, value } = e.target;
    const updatedAdiciones = [...recipeData.adiciones];
    updatedAdiciones[index] = {
      ...updatedAdiciones[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      adiciones: updatedAdiciones,
    });
  };

  const handleAddAdiciones = () => {
    setRecipeData({
      ...recipeData,
      adiciones: [
        ...recipeData.adiciones,
        {
          name: "",
          type: "",
          quantity: "",
          unit: "",
        },
      ],
    });
  };

  const handleRemoveAdiciones = (index) => {
    const updatedAdiciones = [...recipeData.adiciones];
    updatedAdiciones.splice(index, 1);

    setRecipeData({
      ...recipeData,
      adiciones: updatedAdiciones,
    });
  };

  //MACERACION

  const handleChangeMaceracion = (e, index) => {
    const { name, value } = e.target;
    const updatedMaceracion = [...recipeData.maceracion];
    updatedMaceracion[index] = {
      ...updatedMaceracion[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      maceracion: updatedMaceracion,
    });
  };

  const handleAddMaceracion = () => {
    setRecipeData({
      ...recipeData,
      maceracion: [
        ...recipeData.maceracion,
        {
          temperature: "",
          time: "",
        },
      ],
    });
  };

  const handleRemoveMaceracion = (index) => {
    const updatedMaceracion = [...recipeData.maceracion];
    updatedMaceracion.splice(index, 1);

    setRecipeData({
      ...recipeData,
      maceracion: updatedMaceracion,
    });
  };

  //FERMENTACION

  const handleChangeFermentacion = (e, index) => {
    const { name, value } = e.target;
    const updatedFermentacion = [...recipeData.fermentacion];
    updatedFermentacion[index] = {
      ...updatedFermentacion[index],
      [name]: value,
    };

    setRecipeData({
      ...recipeData,
      fermentacion: updatedFermentacion,
    });
  };

  const handleAddFermentacion = () => {
    setRecipeData({
      ...recipeData,
      fermentacion: [
        ...recipeData.fermentacion,
        {
          temperature: "",
          time: "",
        },
      ],
    });
  };

  const handleRemoveFermentacion = (index) => {
    const updatedFermentacion = [...recipeData.fermentacion];
    updatedFermentacion.splice(index, 1);

    setRecipeData({
      ...recipeData,
      fermentacion: updatedFermentacion,
    });
  };

  return (
    <div className="w-full mt-5">
      <form onSubmit={handleSubmit} className="flex flex-wrap justify-center md:gap-10 ">
        <div className="md:w-1/3 w-96">
          <label className="w-full mb-4 block text-sm font-medium text-gray-700">
            Nombre de la Cerveza
            <input
              className="mt-1 p-2 border rounded-md w-full"
              type="text"
              name="name"
              value={recipeData.name}
              onChange={handleChange}
            />
          </label>
          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Autor
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="author"
              type="text"
              value={recipeData.author}
              onChange={handleChange}
            />
          </label>
          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Imagen
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="image"
              type="text"
              value={recipeData.image}
              onChange={handleChange}
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Alcohol por Volumen
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="abv"
              type="number"
              pattern="[0-9]+([.][0-9]+)?"
              value={recipeData.abv}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Gravedad Original
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="og"
              type="number"
              value={recipeData.og}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Gravedad Final
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="fg"
              type="number"
              value={recipeData.fg}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Unidades Internacionales de Amargor
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="ibu"
              type="number"
              value={recipeData.ibu}
              onChange={handleChange}
              placeholder="0"
            />
          </label>
        </div>
        <div className="md:w-1/3 w-96">
          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Tamaño del Lote
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="batchSize"
              type="number"
              value={recipeData.batchSize}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className="w-full mb-4 block text-sm font-medium text-gray-700">
            Volumen de Agua de Maceración
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="volumenAguaMaceracion"
              type="number"
              value={recipeData.volumenAguaMaceracion}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Volumen de Agua de Lavado
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="volumenAguaLavado"
              type="number"
              value={recipeData.volumenAguaLavado}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Tamaño del Hervor
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="boilSize"
              type="number"
              value={recipeData.boilSize}
              onChange={handleChange}
              placeholder="0.0"
            />
          </label>

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Tiempo del Hervor
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="boilTime"
              type="number"
              value={recipeData.boilTime}
              onChange={handleChange}
              placeholder="10 minutos"
            />
          </label>

          <label className="w-full mb-4 block text-sm font-medium text-gray-700">
            Estilo
            <select
              className="mt-1 p-2 border rounded-md w-full text-black"
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

          <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
            Nota
            <input
              className="mt-1 p-2 border rounded-md w-full"
              name="note"
              type="text"
              value={recipeData.note}
              onChange={handleChange}
              placeholder="Comentario adicional"
            />
          </label>
        </div>
        {/* FERMENTABLES */}
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <FermentablesSection
              fermentables={recipeData.fermentables}
              onChange={handleChangeFermentable}
              onAdd={handleAddFermentable}
              onRemove={handleRemoveFermentable}
            />
          </div>

          {/* LUPULOS */}
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <LupulosSection
              lupulos={recipeData.lupulos}
              onChange={handleChangeLupulos}
              onAdd={handleAddLupulos}
              onRemove={handleRemoveLupulos}
            />
          </div>

          {/* LEVADURA */}
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <LevadurasSection
              levadura={recipeData.levadura}
              onChange={handleChangeLevadura}
              onAdd={handleAddLevadura}
              onRemove={handleRemoveLevadura}
            />
          </div>

          {/* ADICIONES */}
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <AdicionesSection
              adiciones={recipeData.adiciones}
              onChange={handleChangeAdiciones}
              onAdd={handleAddAdiciones}
              onRemove={handleRemoveAdiciones}
            />
          </div>

          {/* MACERACION */}
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <MaceracionSection
              maceracion={recipeData.maceracion}
              onChange={handleChangeMaceracion}
              onAdd={handleAddMaceracion}
              onRemove={handleRemoveMaceracion}
            />
          </div>

          {/* Fermentacion */}
          <div className="bg-gradient-to-r text-black from-yellow-600 via-yellow-400 to-yellow-600 flex rounded-lg">
            <FermentacionSection
              fermentacion={recipeData.fermentacion}
              onChange={handleChangeFermentacion}
              onAdd={handleAddFermentacion}
              onRemove={handleRemoveFermentacion}
            />
          </div>
        </div>

        <label className="w-full mb-4 block text-sm font-medium text-gray-700">
          Sistema Métrico:
          <select
            className="mt-1 p-2 border rounded-md w-full"
            name="unitSystem"
            value={recipeData.unitSystem}
            onChange={handleChange}
          >
            <option value="metric">Métrico</option>
            <option value="imperial">Imperial</option>
          </select>
        </label>

        <label className="w-full mb-4 block text-sm font-medium text-gray-700">
          Instrucciones:
          <input
            className="mt-1 p-2 border rounded-md w-full"
            name="instructions"
            type="text"
            value={recipeData.instructions}
            onChange={handleChange}
          />
        </label>
        <div className="w-full">
          <button className="p-2 bg-blue-500 text-white rounded-md" type="submit">
            Enviar Receta
          </button>
        </div>
      </form>
    </div>
  );
};
