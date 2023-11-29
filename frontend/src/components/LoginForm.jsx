import { useState } from "react";

export const LoginForm = () => {
    const [formulario, setFormulario] = useState({
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
        // aqui puede ir la logica de enviar los datos a un servidor u otras acciones
        console.log("Datos del formulario", formulario);
    };

    return (
        <form onSubmit={handleSubmit} className="w-96 ">
            <div className="inline-flex items-center justify-between w-full">
                <hr className="w-44 h-px  bg-gray-400 border-0" />
                <span className="font-medium text-gray-700">O</span>
                <hr className="w-44 h-px  bg-gray-400 border-0 " />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email:
                </label>
                <input placeholder="nombre@email.com"
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
                <input placeholder=" Escribe tu Contraseña"
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
                <input placeholder="Confirma tu contraseña"
                    className="w-full rounded-2xl border-2 border-gray-300 bg-white py-2 px-3 "
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
                Iniciar Sesion
            </button>
        </form>
    );
};
