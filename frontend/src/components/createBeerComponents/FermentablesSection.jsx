import { useEffect, useState } from "react";
import { getAllMaltas } from "../../services/ingredients/malta";

export const FermentablesSection = ({ fermentables, recipeData, setRecipeData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllMaltas().then((data) => setData(data));
  }, []);

  const onChange = (e, index) => {
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
  const onAdd = () => {
    setRecipeData({
      ...recipeData,
      fermentables: [...recipeData.fermentables, { MaltaId: "", cantidad: "" }],
    });
  };
  const onRemove = (index) => {
    const updatedFermentables = [...recipeData.fermentables];
    updatedFermentables.splice(index, 1);
    setRecipeData({
      ...recipeData,
      fermentables: updatedFermentables,
    });
  };

  return (
    <div className="flex flex-col  justify-center items-stretch px-10 py-10">
      <h2 className="text-2xl pb-4">Fermentables</h2>
      {fermentables.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col justify-center  mb-2">
          <label className="flex flex-col justify-between">
            Nombre:
            <select
              className="p-1 border rounded-md mr-2"
              name="MaltaId"
              value={recipeData.fermentables.MaltaId}
              onChange={(e) => onChange(e, index)}
            >
              <option value="">Selecciona un fermentable</option>
              {data.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col justify-between">
            Cantidad:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="cantidad"
              value={item.cantidad}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <button
            className="p-1 mt-6 bg-[#A04000]  text-white rounded-md"
            type="button"
            onClick={() => onRemove(index)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={onAdd}
        className="mt-4 p-2  bg-[#229954] hover:bg-[#145A32] text-white rounded-md"
      >
        Agregar Fermentable
      </button>
    </div>
  );
};
