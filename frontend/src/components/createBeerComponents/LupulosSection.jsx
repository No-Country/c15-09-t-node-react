import { useEffect, useState } from "react";
import { getAllLupulos } from "../../services/ingredients/lupulo";
export const LupulosSection = ({ lupulos, recipeData, setRecipeData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllLupulos().then((data) => setData(data));
  }, []);
  const onChange = (e, index) => {
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

  const onAdd = () => {
    setRecipeData({
      ...recipeData,
      lupulos: [
        ...recipeData.lupulos,
        {
          LupuloId: "",
          cantidad: "",
          uso: "",
          tiempo: "",
          ibu: "",
        },
      ],
    });
  };

  const onRemove = (index) => {
    const updatedLupulos = [...recipeData.lupulos];
    updatedLupulos.splice(index, 1);

    setRecipeData({
      ...recipeData,
      lupulos: updatedLupulos,
    });
  };

  return (
    <div className="flex flex-col justify-center items-stretch px-10 py-10">
      <h2 className="text-2xl pb-4">Lupulos</h2>
      {lupulos.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col  mb-2">
          <label className="flex flex-col justify-between mr-4">
            Nombre:
            <select
              className="p-1 border rounded-md mr-2"
              name="LupuloId"
              value={recipeData.lupulos.LupuloId}
              onChange={(e) => onChange(e, index)}
            >
              <option value="">Selecciona un lúpulo</option>
              {data.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col justify-between mr-4">
            Cantidad(g)
            <input
              className="p-1 border rounded-md mr-2"
              type="number"
              name="cantidad"
              value={item.cantidad}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Uso:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="uso"
              value={item.uso}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Tiempo(min)
            <input
              className="p-1 border rounded-md mr-2"
              type="number"
              name="tiempo"
              value={item.tiempo}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Ibu:
            <input
              className="p-1 border rounded-md mr-2"
              type="number"
              name="ibu"
              value={item.ibu}
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
        Agregar Lupulo
      </button>
    </div>
  );
};
