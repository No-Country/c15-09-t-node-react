import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import "../components/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Parte izquierda - Formulario */}
      <div className="absolute top-20 left-20">
        <Logo />
      </div>

      <div className="flex-1 p-8  flex flex-col justify-center items-center relative">
        <h1 className="text-4xl font-bold mb-6">Iniciar Sesion</h1>

        <LoginForm />
        <Link to={"/register"} className="underline ">
          No tienes cuenta? Crea una.
        </Link>
      </div>

      {/* Parte derecha - Imagen */}
      <div className="flex-1 h-screen imagenLogin"></div>
    </div>
  );
};
