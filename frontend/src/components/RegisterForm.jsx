import { useState } from "react";
import { createUser } from "../services/user";
export const RegisterForm = () => {
  const [formulario, setFormulario] = useState({
    usuario: "",
    email: "",
    password: "",
    confirmpass: "",
  });

  const [token, setToken] = useState(localStorage.getItem("authToken"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    createUser(formulario)
      .then((data) => {
        localStorage.setItem("authToken", token);
        setToken(data.token);
      })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit} className="w-96">
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
          name="usuario"
          value={formulario.usuario}
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
          name="confirmpass"
          value={formulario.confirmpass}
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
