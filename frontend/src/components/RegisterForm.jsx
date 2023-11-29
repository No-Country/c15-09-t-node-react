import { useState } from "react";
export const RegisterForm = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones como enviar los datos a un servidor o realizar otras lógicas
    console.log("Datos del formulario:", formulario);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://tu-backend.com/api/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formulario),
  //     });

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       console.log("Respuesta del servidor:", responseData);
  //       // Puedes realizar acciones adicionales después de un registro exitoso
  //     } else {
  //       console.error("Error en la solicitud al backend:", response.statusText);
  //       // Puedes manejar errores aquí
  //     }
  //   } catch (error) {
  //     console.error("Error en la solicitud:", error);
  //     // Puedes manejar errores de red aquí
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className="w-96  ">
      <button
        className="bg-white w-full mb-2 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-2xl border-2"
        onClick={() => {
          // Lógica de inicio de sesión con Google
        }}
      >
        Registrarse con Google
      </button>
      <div className="inline-flex items-center justify-between w-full">
        <hr className="w-44 h-px  bg-gray-400 border-0" />
        <span className="font-medium text-gray-700">O</span>
        <hr className="w-44 h-px  bg-gray-400 border-0 " />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
          Usuario:
        </label>
        <input
          placeholder="Tu nombre de usuario"
          className="w-full rounded-2xl border-2 border-gray-300 bg-white py-2 px-3"
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          placeholder="Name@email.com"
          className="w-full rounded-2xl border-2 border-gray-300 bg-white py-2 px-3"
          type="email"
          name="email"
          value={formulario.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password:
        </label>
        <input
          placeholder="Password"
          className="w-full rounded-2xl border-2 border-gray-300 bg-white py-2 px-3"
          type="password"
          name="password"
          value={formulario.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
          Confirm Password:
        </label>
        <input
          placeholder="Password"
          className="w-full rounded-2xl border-2 border-gray-300 bg-white py-2 px-3"
          type="password"
          name="confirmPassword"
          value={formulario.confirmPassword}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-secondary hover:bg-primary rounded-2xl py-3 w-full text-base text-white font-black mb-3"
      >
        Registrarse
      </button>
    </form>
  );
};
