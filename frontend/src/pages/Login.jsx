import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";
import "../components/Login.css"



export const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Parte izquierda - Formulario */}
            <div className="absolute top-20 left-20">
                <Logo />
            </div>

            <div className="flex-1 p-8 flex flex-col justify-center items-center relative">
                <h1 className="text-4xl font-bold mb-8">Iniciar Sesion</h1>

                <LoginForm />
                <a href="" className="underline">
                    Ya tienes una cuenta? Inicia sesión
                </a>
            </div>

            {/* Parte derecha - Imagen */}
            <div className="flex-1 h-screen imagen"></div>
        </div>
    );

};

