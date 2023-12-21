import { useState } from "react";
import contactoImage from "../assets/images/contacto-background.jpg";

export const Contact = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <main className="font-poppings text-neutral-100 text-center mt-24">
      <img
        src={contactoImage}
        className="h-screen z-[-1] absolute w-full right-0 md:top-28 top-44 bg-contain brightness-[0.4] object-cover"
      ></img>
      <div className="my-16">
        <h1 className="uppercase font-black text-4xl sm:text-7xl mb-4">Contactanos 🍻</h1>
        <p className="sm:text-base text-sm">
          ¿Alguna pregunta? ¡Déjanos tu mensaje en el formulario!
        </p>
      </div>

      <section className="bg-neutral-100 py-6 px-6 h-fit max-w-lg mx-auto text-left rounded-md w-auto">
        <div className="sm:flex sm:flex-row sm:justify-between flex flex-col">
          <div className="sm:max-w-xs mb-9 sm:mb-4 max-w-full">
            <label htmlFor="nombre" className="block text-neutral-800 font-bold text-lg mb-4">
              Nombre
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              htmlFor="nombre"
              placeholder="Ingresa tu nombre"
              className="border-b-2 w-full sm:max-w-fit pb-1 border-neutral-400 text-neutral-800 hover:border-neutral-800 focus:border-neutral-800 focus:outline-none bg-neutral-100"
            ></input>
          </div>
          <div className="sm:max-w-xs max-w-full">
            <label htmlFor="apellido" className="block text-neutral-800 font-bold text-lg mb-4">
              Apellido
            </label>
            <input
              value={surname}
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              htmlFor="apellido"
              placeholder="Ingresa tu apellido"
              className="border-b-2 pb-1 w-full sm:max-w-fit border-neutral-400 text-neutral-800 hover:border-neutral-800 focus:border-neutral-800 focus:outline-none bg-neutral-100"
            ></input>
          </div>
        </div>
        <div className="w-full mt-9">
          <label htmlFor="asunto" className="block text-neutral-800 font-bold text-lg mb-4">
            Asunto
          </label>
          <input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            htmlFor="asunto"
            placeholder="¿Sobre que quieres hablar?"
            className="border-b-2 pb-1 border-neutral-400 text-neutral-800 w-full hover:border-neutral-800 focus:border-neutral-800 focus:outline-none bg-neutral-100"
          ></input>
        </div>

        <div className="w-full mt-9">
          <label htmlFor="mensaje" className="block text-neutral-800 font-bold text-lg mb-4">
            Mensaje
          </label>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            htmlFor="mensaje"
            placeholder="Ingresa tu mensaje"
            className="border-b-2 pb-1 border-neutral-400 text-neutral-800 w-full hover:border-neutral-800 focus:border-neutral-800 focus:outline-none bg-neutral-100"
          ></textarea>
        </div>

        {/*TODO: cambiar email */}
        <a
          href={`mailto:example@email.com?subject=${encodeURIComponent(
            subject
          )} - ${encodeURIComponent(name)} ${encodeURIComponent(surname)}&body=${encodeURIComponent(
            body
          )}`}
          className="bg-secondary hover:bg-primary transition-colors px-8 py-3 rounded-lg ml-auto mt-9 font-bold inline-block"
        >
          Enviar mensaje
        </a>
      </section>
    </main>
  );
};
