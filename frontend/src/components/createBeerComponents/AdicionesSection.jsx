export const AdicionesSection = ({ adiciones, recipeData, setRecipeData }) => {
  const onChange = (e, index) => {
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

  const onAdd = () => {
    setRecipeData({
      ...recipeData,
      adiciones: [
        ...recipeData.adiciones,
        {
          name: "",
          type: "",
          amount: "",
          unit: "",
          notes: "",
        },
      ],
    });
  };

  const onRemove = (index) => {
    const updatedAdiciones = [...recipeData.adiciones];
    updatedAdiciones.splice(index, 1);

    setRecipeData({
      ...recipeData,
      adiciones: updatedAdiciones,
    });
  };

  return (
    <div className="flex flex-col justify-between items-stretch px-10 py-10">
      <h2 className="text-2xl pb-4">Adiciones</h2>
      {adiciones.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col mb-2">
          <label className="flex flex-col justify-between mr-4">
            Nombre:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Tipo:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="type"
              value={item.type}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Cantidad
            <input
              className="p-1 border rounded-md mr-2"
              type="number"
              name="amount"
              value={item.amount}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Unidad:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="unit"
              value={item.unit}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Notas:
            <textarea
              className="p-1 border rounded-md mr-2"
              type="text"
              name="notes"
              value={item.notes}
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
        className="p-2 bg-[#229954] hover:bg-[#145A32] text-white rounded-md  "
      >
        Agregar Ingredientes
      </button>
    </div>
  );
};
