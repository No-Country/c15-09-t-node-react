import React, { useState } from "react";

export const CreateBeer = () => {
  const [recipeData, setRecipeData] = useState({
    name: "",
    author: "",
    image: "",
    type: "",
    abv: 0.0,
    og: "",
    fg: "",
    ibu: "",
    color: "",
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
    lupulo: "",
    levadura: "",
    adicionales: "",
    maceracion: "",
    fermentacion: "",
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
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="w-full mb-4 block text-sm font-medium text-gray-700">
          Nombre
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
          Tipo
          <input
            className="mt-1 p-2 border rounded-md w-full"
            name="type"
            type="text"
            value={recipeData.type}
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
          Graverdad Original
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
          Graverdad Final
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

        <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
          Color
          <input
            className="mt-1 p-2 border rounded-md w-full"
            name="color"
            type="number"
            value={recipeData.color}
            onChange={handleChange}
            placeholder="0.0"
          />
        </label>

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

        <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
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
            className="mt-1 p-2 border rounded-md w-full"
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
            type="number"
            value={recipeData.note}
            onChange={handleChange}
            placeholder="Comentario adicional"
          />
        </label>

        {recipeData.fermentables.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <label>
              Nombre:
              <input
                className="p-2 border rounded-md mr-2"
                type="text"
                name="name"
                value={item.name}
                onChange={(e) => handleChangeFermentable(e, index)}
              />
            </label>
            <label>
              Cantidad:
              <input
                className="p-2 border rounded-md mr-2"
                type="text"
                name="quantity"
                value={item.quantity}
                onChange={(e) => handleChangeFermentable(e, index)}
              />
            </label>
            <label>
              Color:
              <input
                className="p-2 border rounded-md mr-2"
                type="text"
                name="color"
                value={item.color}
                onChange={(e) => handleChangeFermentable(e, index)}
              />
            </label>
            <button
              className="p-2 bg-red-500 text-white rounded-md"
              type="button"
              onClick={() => handleRemoveFermentable(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddFermentable}
          className="p-2 bg-green-500 text-white rounded-md"
        >
          Agregar Fermentable
        </button>

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
          {getLabel("Cantidad")}
          <input
            className="mt-1 p-2 border rounded-md w-full"
            type="text"
            name="quantity"
            value={recipeData.quantity}
            onChange={handleChange}
          />
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

// import React, { useState } from "react";

// export const CreateBeer = () => {
//   const [recipeData, setRecipeData] = useState({
//     name: "",
//     author: "",
//     image: "",
//     type: "",
//     abv: 0.0,
//     og: "",
//     fg: "",
//     ibu: "",
//     color: "",
//     batchSize: "",
//     volumenAguaMaceracion: "",
//     volumenAguaLavado: "",
//     boilSize: "",
//     boilTime: "",
//     style: "",
//     note: "",
//     fermentables: [
//       {
//         name: "",
//         quantity: "",
//         color: "",
//       },
//     ],
//     lupulos: [
//       {
//         name: "",
//         quantity: "",
//         alphaAcids: "",
//         additionTime: "",
//         bitterness: "",
//       },
//     ],
//     levadura: [
//       {
//         name: "",
//         type: "",
//         quantity: "",
//       },
//     ],
//     ingredientesAdicionales: [
//       {
//         name: "",
//         type: "",
//         quantity: "",
//         unit: "",
//       },
//     ],
//     maceracion: [
//       {
//         name: "",
//         temperature: "",
//         time: "",
//       },
//     ],
//     fermentacion: [
//       {
//         type: "",
//         temperature: "",
//         time: "",
//       },
//     ],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipeData({
//       ...recipeData,
//       [name]: value,
//     });
//   };

//   const getLabel = (fieldName) => {
//     const unitLabel = recipeData.unitSystem === "metric" ? "(litros)" : "(galones)";
//     return `Cantidad ${unitLabel} de ${fieldName}`;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Datos de la receta:", recipeData);
//   };

//   // Fermentables formulario
//   const handleChangeFermentable = (e, index) => {
//     const { name, value } = e.target;
//     const updatedFermentables = [...recipeData.fermentables];
//     updatedFermentables[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       fermentables: updatedFermentables,
//     });
//   };

//   const handleAddFermentable = () => {
//     setRecipeData({
//       ...recipeData,
//       fermentables: [...recipeData.fermentables, { name: "", quantity: "", color: "" }],
//     });
//   };

//   const handleRemoveFermentable = (index) => {
//     const updatedFermentables = [...recipeData.fermentables];
//     updatedFermentables.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       fermentables: updatedFermentables,
//     });
//   };

//   // LEVADURA
//   const handleChangeLevadura = (e, index) => {
//     const { name, value } = e.target;
//     const updatedLevaduras = [...recipeData.levadura];
//     updatedLevaduras[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       levadura: updatedLevaduras,
//     });
//   };

//   const handleAddLevadura = () => {
//     setRecipeData({
//       ...recipeData,
//       levadura: [...recipeData.levadura, { name: "", type: "", quantity: "" }],
//     });
//   };

//   const handleRemoveLevadura = (index) => {
//     const updatedLevaduras = [...recipeData.levadura];
//     updatedLevaduras.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       levadura: updatedLevaduras,
//     });
//   };
//   //LUPULO
//   const handleChangeLupulo = (e, index) => {
//     const { name, value } = e.target;
//     const updatedLupulos = [...recipeData.lupulos];
//     updatedLupulos[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       lupulos: updatedLupulos,
//     });
//   };

//   const handleAddLupulo = () => {
//     setRecipeData({
//       ...recipeData,
//       lupulos: [
//         ...recipeData.lupulos,
//         { name: "", quantity: "", alphaAcids: "", additionTime: "", bitterness: "" },
//       ],
//     });
//   };

//   const handleRemoveLupulo = (index) => {
//     const updatedLupulos = [...recipeData.lupulos];
//     updatedLupulos.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       lupulos: updatedLupulos,
//     });
//   };

//   //INGREDIENTES ADICIONALES
//   const handleChangeIngredientesAdicionales = (e, index) => {
//     const { name, value } = e.target;
//     const updatedIngredientesAdicionales = [...recipeData.ingredientesAdicionales];
//     updatedIngredientesAdicionales[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       ingredientesAdicionales: updatedIngredientesAdicionales,
//     });
//   };

//   const handleAddIngredientesAdicionales = () => {
//     setRecipeData({
//       ...recipeData,
//       ingredientesAdicionales: [
//         ...recipeData.ingredientesAdicionales,
//         { name: "", type: "", quantity: "", unit: "" },
//       ],
//     });
//   };

//   const handleRemoveIngredientesAdicionales = (index) => {
//     const updatedIngredientesAdicionales = [...recipeData.ingredientesAdicionales];
//     updatedIngredientesAdicionales.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       ingredientesAdicionales: updatedIngredientesAdicionales,
//     });
//   };
//   //MACERACION
//   const handleChangeMaceracion = (e, index) => {
//     const { name, value } = e.target;
//     const updatedMaceracion = [...recipeData.maceracion];
//     updatedMaceracion[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       maceracion: updatedMaceracion,
//     });
//   };

//   const handleAddMaceracion = () => {
//     setRecipeData({
//       ...recipeData,
//       maceracion: [...recipeData.maceracion, { name: "", temperature: "", time: "" }],
//     });
//   };

//   const handleRemoveMaceracion = (index) => {
//     const updatedMaceracion = [...recipeData.maceracion];
//     updatedMaceracion.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       maceracion: updatedMaceracion,
//     });
//   };
//   //FERMENTACION
//   const handleChangeFermentacion = (e, index) => {
//     const { name, value } = e.target;
//     const updatedFermentacion = [...recipeData.fermentacion];
//     updatedFermentacion[index][name] = value;

//     setRecipeData({
//       ...recipeData,
//       fermentacion: updatedFermentacion,
//     });
//   };

//   const handleAddFermentacion = () => {
//     setRecipeData({
//       ...recipeData,
//       fermentacion: [...recipeData.fermentacion, { type: "", temperature: "", time: "" }],
//     });
//   };

//   const handleRemoveFermentacion = (index) => {
//     const updatedFermentacion = [...recipeData.fermentacion];
//     updatedFermentacion.splice(index, 1);

//     setRecipeData({
//       ...recipeData,
//       fermentacion: updatedFermentacion,
//     });
//   };

//   return (
//     <div className="w-full">
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         <label className="w-full mb-4 block text-sm font-medium text-gray-700">
//           Nombre
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             type="text"
//             name="name"
//             value={recipeData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Autor
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="author"
//             type="text"
//             value={recipeData.author}
//             onChange={handleChange}
//           />
//         </label>
//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Imagen
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="image"
//             type="text"
//             value={recipeData.image}
//             onChange={handleChange}
//           />
//         </label>
//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Tipo
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="type"
//             type="text"
//             value={recipeData.type}
//             onChange={handleChange}
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Alcohol por Volumen
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="abv"
//             type="number"
//             pattern="[0-9]+([.][0-9]+)?"
//             value={recipeData.abv}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Graverdad Original
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="og"
//             type="number"
//             value={recipeData.og}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Graverdad Final
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="fg"
//             type="number"
//             value={recipeData.fg}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Unidades Internacionales de Amargor
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="ibu"
//             type="number"
//             value={recipeData.ibu}
//             onChange={handleChange}
//             placeholder="0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Color
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="color"
//             type="number"
//             value={recipeData.color}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Tamaño del Lote
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="batchSize"
//             type="number"
//             value={recipeData.batchSize}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Volumen de Agua de Maceración
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="volumenAguaMaceracion"
//             type="number"
//             value={recipeData.volumenAguaMaceracion}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Volumen de Agua de Lavado
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="volumenAguaLavado"
//             type="number"
//             value={recipeData.volumenAguaLavado}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Tamaño del Hervor
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="boilSize"
//             type="number"
//             value={recipeData.boilSize}
//             onChange={handleChange}
//             placeholder="0.0"
//           />
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Tiempo del Hervor
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="boilTime"
//             type="number"
//             value={recipeData.boilTime}
//             onChange={handleChange}
//             placeholder="10 minutos"
//           />
//         </label>

//         <label className="w-full mb-4 block text-sm font-medium text-gray-700">
//           Estilo
//           <select
//             className="mt-1 p-2 border rounded-md w-full"
//             name="style"
//             value={recipeData.style}
//             onChange={handleChange}
//           >
//             <option value="">Selecciona un estilo</option>
//             <option value="Ale">Ale</option>
//             <option value="Lager">Lager</option>
//             <option value="Stout">Stout</option>
//             <option value="Porter">Porter</option>
//             <option value="Pilsner">Pilsner</option>
//             <option value="IPA">India Pale Ale (IPA)</option>
//             <option value="APA">American Pale Ale (APA)</option>
//             <option value="DIPA">Double IPA (DIPA)</option>
//             <option value="Wheat Beer">Cerveza de Trigo</option>
//             <option value="Saison">Saison</option>
//             <option value="Belgian Dubbel">Belgian Dubbel</option>
//             <option value="Belgian Tripel">Belgian Tripel</option>
//             <option value="Belgian Quad">Belgian Quad</option>
//           </select>
//         </label>

//         <label className=" w-full mb-4 block text-sm font-medium text-gray-700">
//           Nota
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="note"
//             type="number"
//             value={recipeData.note}
//             onChange={handleChange}
//             placeholder="Comentario adicional"
//           />
//         </label>

//         {/* fermentables */}

//         {recipeData.fermentables.map((fermentable, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <input
//               type="text"
//               name={`fermentables[${index}].name`}
//               defaultValue={fermentable.name}
//               onChange={(e) => handleChangeFermentable(e, index)}
//               placeholder="Nombre"
//               className="p-2 border rounded-md mr-2"
//             />
//             <input
//               type="text"
//               name={`fermentables[${index}].quantity`}
//               defaultValue={fermentable.quantity}
//               onChange={(e) => handleChangeFermentable(e, index)}
//               placeholder="Cantidad"
//               className="p-2 border rounded-md mr-2"
//             />
//             <input
//               type="text"
//               name={`fermentables[${index}].color`}
//               defaultValue={fermentable.color}
//               onChange={(e) => handleChangeFermentable(e, index)}
//               placeholder="Color"
//               className="p-2 border rounded-md mr-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleRemoveFermentable(index)}
//               className="p-2 bg-red-500 text-white rounded-md"
//             >
//               Eliminar
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddFermentable}
//           className="p-2 bg-green-500 text-white rounded-md"
//         >
//           Agregar Fermentable
//         </button>

//         {/* lupulos */}

//         {recipeData.lupulos.map((lupulos, index) => (
//           <div key={index} className="flex items-center mb-2">
//             <input
//               type="text"
//               name={`lupulos[${index}].name`}
//               defaultValue={lupulos.name}
//               onChange={(e) => handleChangeLupulo(e, index)}
//               placeholder="Nombre"
//               className="p-2 border rounded-md mr-2"
//             />
//             <input
//               type="text"
//               name={`lupulos[${index}].quantity`}
//               defaultValue={lupulos.quantity}
//               onChange={(e) => handleChangeLupulo(e, index)}
//               placeholder="Cantidad"
//               className="p-2 border rounded-md mr-2"
//             />
//             <input
//               type="text"
//               name={`lupulos[${index}].color`}
//               defaultValue={lupulos.color}
//               onChange={(e) => handleChangeLupulo(e, index)}
//               placeholder="Color"
//               className="p-2 border rounded-md mr-2"
//             />
//             <button
//               type="button"
//               onClick={() => handleRemoveLupulo(index)}
//               className="p-2 bg-red-500 text-white rounded-md"
//             >
//               Eliminar
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddFermentable}
//           className="p-2 bg-green-500 text-white rounded-md"
//         >
//           Agregar Fermentable
//         </button>

//         <label className="w-full mb-4 block text-sm font-medium text-gray-700">
//           Sistema Métrico:
//           <select
//             className="mt-1 p-2 border rounded-md w-full"
//             name="unitSystem"
//             value={recipeData.unitSystem}
//             onChange={handleChange}
//           >
//             <option value="metric">Métrico</option>
//             <option value="imperial">Imperial</option>
//           </select>
//         </label>
//         <label className="w-full mb-4 block text-sm font-medium text-gray-700">
//           {getLabel("Cantidad")}
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             type="text"
//             name="quantity"
//             value={recipeData.quantity}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="w-full mb-4 block text-sm font-medium text-gray-700">
//           Instrucciones:
//           <input
//             className="mt-1 p-2 border rounded-md w-full"
//             name="instructions"
//             type="text"
//             value={recipeData.instructions}
//             onChange={handleChange}
//           />
//         </label>
//         <div className="w-full">
//           <button className="p-2 bg-blue-500 text-white rounded-md" type="submit">
//             Enviar Receta
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
