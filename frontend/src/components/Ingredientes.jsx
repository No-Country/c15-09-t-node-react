
export const Ingredientes = () => {
    return (
        <div className="mt-24 text-center mx-3 md:text-start">
            <h2 className="text-center font-homemade text-4xl font-bold "> Ingredientes de la Cerveza Artesanal </h2>
            <p className="font-poppings text-lg mt-6">Los ingredientes principales de la cerveza son <b>la malta, el lúpulo, la levadura y el agua</b>.
                Pero si quieres hacer una buena cerveza necesitarás materias primas de calidad.
                Además si quieres experimentar y conseguir cervezas de carácter especial tendrás que añadir
                otros <b>ingredientes especiales como azúcares, hierbas, flores, frutos o especias</b>.
                A continuación te mostramos con todo detalle los ingredientes de la cerveza.</p>
            <h4 className="text-center text-3xl font-semibold text-[#a76b32] mt-6">Son los siguientes</h4>

            <div className="flex flex-wrap justify-between mt-9 ">
                <img className="w-[22%] rounded-full " src="https://sooluciona.com/wp-content/uploads/2019/04/Diferencias-entre-malta-cebada-y-grano.jpg" alt="" />
                <img className="w-[22%] rounded-full" src="https://campo.lavozdelpueblo.com.ar/wp-content/uploads/2022/02/lupulo.jpg" alt="" />
                <img className="w-[22%] rounded-full" src="https://img2.rtve.es/im/5897902/?w=900" alt="" />
                <img className="w-[22%] rounded-full" src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>

            <p className="font-poppings text-lg mt-8 mb-36">Lo bueno de la cerveza es que admite gran cantidad de ingredientes diferentes por lo que podrás crear cervezas diferentes constantemente.
                <b>Las posibilidades de las cervezas artesanas son infinitas</b>.</p>
        </div>
    )
}

