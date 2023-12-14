export const LevadurasSection = ({ levadura, onChange, onAdd, onRemove }) => {
  return (
    <div className="flex flex-col justify-center items-stretch px-10 py-10">
      <h2 className="text-2xl pb-4">Levaduras</h2>
      {levadura.map((item, index) => (
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
      <button type="button" onClick={onAdd} className="p-2 bg-[#229954] hover:bg-[#145A32] text-white rounded-md ">
        Agregar Levadura
      </button>
    </div>
  );
};
