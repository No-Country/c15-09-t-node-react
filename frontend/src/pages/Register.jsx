import { RegisterForm } from "../components/RegisterForm";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";
import "../components/Register.css";
export const Register = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center">
      {/* Parte izquierda - Fondo con imagen */}
      <div className="flex-1 sm:block hidden h-screen imagenRegister"></div>

      {/* Parte derecha - Formulario */}
      <div className="absolute top-20 right-16">
        <Logo />
      </div>
      <div className="flex-1 p-8 flex flex-col justify-center items-center relative">
        <h1 className="text-4xl font-bold mb-8">Crea una cuenta</h1>

        <RegisterForm />
        <Link to={"/login"} className="underline">
          Ya tienes una cuenta? Inicia sesión
        </Link>
      </div>
    </div>
  );
};
