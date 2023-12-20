import { useEffect, useState } from "react";
import { getAllLevaduras } from "../../services/ingredients/levadura";

export const LevadurasSection = ({ levadura, recipeData, setRecipeData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllLevaduras().then((data) => setData(data));
  }, []);
  const onChange = (e, index) => {
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

  const onAdd = () => {
    setRecipeData({
      ...recipeData,
      levadura: [
        ...recipeData.levadura,
        {
          LevaduraId: "",
          type: "",
          quantity: "",
        },
      ],
    });
  };

  const onRemove = (index) => {
    const updatedLevadura = [...recipeData.levadura];
    updatedLevadura.splice(index, 1);

    setRecipeData({
      ...recipeData,
      levadura: updatedLevadura,
    });
  };
  return (
    <div className="flex flex-col justify-center items-stretch px-10 py-10">
      <h2 className="text-2xl pb-4">Levaduras</h2>
      {levadura.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col mb-2">
          <label className="flex flex-col justify-between mr-4">
            Nombre:
            <select
              className="p-1 border rounded-md mr-2"
              name="LevaduraId"
              value={recipeData.levadura.LevaduraId}
              onChange={(e) => onChange(e, index)}
            >
              <option value="">Selecciona una levadura</option>
              {data.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col justify-between mr-4">
            Cantidad:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <button
            className="p-1 mt-6 bg-[#A04000] text-white rounded-md"
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
        className="p-2 bg-[#229954] hover:bg-[#145A32] text-white rounded-md "
      >
        Agregar Levadura
      </button>
    </div>
  );
};
