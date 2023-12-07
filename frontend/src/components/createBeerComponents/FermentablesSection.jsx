export const FermentablesSection = ({ fermentables, onChange, onAdd, onRemove }) => {
  return (
    <div className="flex flex-col  justify-center items-center px-10 py-10">
      <h2 className="text-2xl pb-4">Fermentables</h2>
      {fermentables.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col justify-center  mb-2">
          <label className="flex flex-col justify-between">
            Nombre:
            <input
              className=" p-1 border rounded-md mr-2 "
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between">
            Cantidad:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between">
            Color:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="color"
              value={item.color}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <button
            className="p-1 mt-2 bg-red-500 text-white rounded-md"
            type="button"
            onClick={() => onRemove(index)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" onClick={onAdd} className="mt-4 p-1 bg-green-500 text-white rounded-md">
        Agregar Fermentable
      </button>
    </div>
  );
};
