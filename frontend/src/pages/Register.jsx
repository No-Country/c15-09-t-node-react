import { RegisterForm } from "../components/RegisterForm";
import { Logo } from "../components/Logo";
import beerImage from "../assets/images/noto_beer-mug.svg";
import "../components/Register.css";
export const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Parte izquierda - Fondo con imagen */}
      <div className="flex-1 h-screen imagen">a</div>

      {/* Parte derecha - Formulario */}
      <div className="flex-1 p-8 flex flex-col justify-center items-center relative">
        <h1 className="text-4xl font-bold mb-8">Crea una cuenta</h1>
        <div className="absolute top-0 left-20">
          <Logo />
        </div>
        <RegisterForm />
        <a href="" className="underline">
          Ya tienes una cuenta? Inicia sesión
        </a>
      </div>
    </div>
  );
};
