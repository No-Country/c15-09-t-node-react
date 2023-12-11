export const LupulosSection = ({ lupulos, onChange, onAdd, onRemove }) => {
  return (
    <div className="flex flex-col justify-center items-center px-10 py-10">
      <h2 className="text-2xl pb-4">Lupulos</h2>
      {lupulos.map((item, index) => (
        <div key={index} className="flex flex-wrap flex-col  mb-2">
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
            Cantidad:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="quantity"
              value={item.quantity}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            AlphaAcids:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="alphaAcids"
              value={item.alphaAcids}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            AdditionTime:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="additionTime"
              value={item.additionTime}
              onChange={(e) => onChange(e, index)}
            />
          </label>
          <label className="flex flex-col justify-between mr-4">
            Bitterness:
            <input
              className="p-1 border rounded-md mr-2"
              type="text"
              name="bitterness"
              value={item.bitterness}
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
      <button type="button" onClick={onAdd} className="p-2 bg-green-500 text-white rounded-md mt-4">
        Agregar Lupulo
      </button>
    </div>
  );
};
