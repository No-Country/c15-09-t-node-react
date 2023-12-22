import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/user";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/userActions";
export const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser(formulario)
      .then((data) => {
        localStorage.setItem("authToken", data.data.token);
        dispatch(setUser(data.data));
        console.log(data.data);
        navigate("/app");
      })
      .catch((e) => console.error("Error de red:", e.message));
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 ">
      <button
        className="bg-white w-full mb-2 hover:bg-gray text-black font-bold py-2 px-4 rounded-2xl border-2"
        onClick={() => {
          // Lógica de inicio de sesión con Google
        }}
      >
        Registrarse con Google
      </button>
      <div className="inline-flex items-center justify-between w-full">
        <hr className="w-44 h-px  bg-gray border-0" />
        <span className="font-medium text-gray-700">O</span>
        <hr className="w-44 h-px  bg-gray border-0 " />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          placeholder="nombre@email.com"
          className="w-full rounded-2xl border-2 border-gray bg-white py-2 px-3"
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
          placeholder=" Escribe tu Contraseña"
          className="w-full rounded-2xl border-2 border-gray bg-white py-2 px-3"
          type="password"
          name="password"
          value={formulario.password}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="bg-secondary hover:bg-primary rounded-2xl py-3 w-full text-base text-white font-black mb-3"
      >
        Iniciar Sesion
      </button>
    </form>
  );
};
