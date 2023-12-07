
export const RecipeDetails = () => {



    const recetas =
        [
            {
                "name": "Chocolate Coffee Stout",
                "author": "Short Circuited Brewers",
                "image": "https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/users%2F9FonQZllBufUcjq2w25kIiC3Jp53%2Fimages%2Frecipes%2FKmxwnZRzY035fir6JsPusshoOPvBHe%2FKmxwnZRzY035fir6JsPusshoOPvBHe.jpeg?alt=media&token=6b76e620-2001-49cc-876b-252e0d6e5da1",
                "type": "All Grain",
                "abv": 6.04,
                "og": 1.061127986,
                "fg": 1.015,
                "ibu": 36.9,
                "color": 34.7,
                "batchSize": 41.63953,
                "mashWaterAmount": 33.29,
                "spargeWaterAmount": 26.44,
                "boilSize": 51.18,
                "boilTime": 60,
                "style": {
                    "colorMax": 40,
                    "ibuMin": 35,
                    "lovibondMin": 30,
                    "category": "American Porter and Stout",
                    "styleGuide": "BJCP 2015",
                    "buGuMax": 1.2,
                    "colorMin": 30,
                    "abvMin": 5,
                    "rbrMin": 0.54,
                    "_id": "default-63",
                    "carbonationStyle": "20B",
                    "name": "American Stout",
                    "type": "Stout",
                    "rbrMax": 1.16,
                    "ogMax": 1.075,
                    "fgMin": 1.01,
                    "lovibondMax": 40,
                    "fgMax": 1.022,
                    "categoryNumber": "20",
                    "ogMin": 1.05,
                    "styleLetter": "B",
                    "ibuMax": 75,
                    "buGuMin": 0.56,
                    "abvMax": 7
                },
                "notes": "Be sure to adjust for your equipment.  Check out the video on our tasting this batch",
                "fermentables": [
                    {
                        "name": "Pale Ale Malt 2-Row",
                        "potential": 1.0368,
                        "amount": 9.071847,
                        "color": 3.5
                    },
                    {
                        "name": "Carapils",
                        "potential": 1.03358,
                        "amount": 0.907185,
                        "color": 1.5
                    },
                    {
                        "name": "Chocolate",
                        "potential": 1.035,
                        "amount": 0.680389,
                        "color": 350
                    },
                    {
                        "name": "Barley, Flaked",
                        "potential": 1.035,
                        "amount": 0.453592,
                        "color": 1.7
                    },
                    {
                        "name": "Caramel/Crystal Malt",
                        "potential": 1.0345,
                        "amount": 0.453592,
                        "color": 128
                    },
                    {
                        "name": "Roasted Barley",
                        "potential": 1.0322,
                        "amount": 0.453592,
                        "color": 383
                    }
                ],
                "hops": [
                    {
                        "name": "Cascade",
                        "amount": 56.699046,
                        "use": "Boil",
                        "time": 60,
                        "ibu": 19.2,
                        "alpha": 6.3
                    },
                    {
                        "name": "Chinook",
                        "amount": 28.349523,
                        "use": "Boil",
                        "time": 60,
                        "ibu": 17.7,
                        "alpha": 11.6
                    }
                ],
                "yeasts": [
                    {
                        "name": "SafAle English Ale",
                        "type": "Ale",
                        "amount": 2
                    }
                ],
                "miscs": [
                    {
                        "name": "Coffee",
                        "type": "Flavor",
                        "amount": 48,
                        "unit": "oz"
                    }
                ],
                "mash": [
                    {
                        "name": "",
                        "stepTemp": 65,
                        "stepTime": 60
                    },
                    {
                        "name": "Mash Out",
                        "stepTemp": 75,
                        "stepTime": 10
                    }
                ],
                "fermentation": [
                    {
                        "type": "Primary",
                        "stepTemp": 18.333333,
                        "stepTime": 14
                    }
                ]
            }]

    return (



        <div >

            {recetas.map((receta, index) => (
                <div key={index}>
                    <div className=" mt-9 rounded-xl overflow-hidden h-96 relative flex justify-center items-center"> <img src="https://wallpapers.com/images/hd/beer-bottles-at-sunset-j8akxlz8u85f58j3.jpg" alt="" />
                    </div>
                    <div className="container font-poppings">
                        <main className="flex mt-16">

                            <div className=" max-w-xl">
                                <h2 className="mb-6  font-semibold text-5xl">{receta.name} </h2>
                                <h4> Autor: {receta.author}</h4>


                                <div className="mb-6">
                                    <h6 className="text-xl font-semibold my-2  ">Información General:</h6>
                                    <p>Tipo: {receta.type}</p>
                                    <p>ABV: {receta.abv}%</p>
                                    <p>OG: {receta.og}</p>
                                    <p>FG: {receta.fg}</p>
                                    <p>IBU: {receta.ibu}</p>
                                    <p>Color: {receta.color}</p>
                                    <p>Tamano de Lote: {receta.batchSize}</p>
                                    <p>Volumen de Agua de Maceracion: {receta.spargeWaterAmount}</p>
                                    <p>Volumen de Agua de Lavado: {receta.mashWaterAmount}</p>
                                    <p>Tamaño del Hervor: {receta.boilSize}</p>
                                    <p>Tiempo de Hervor: {receta.boilTime}</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-xl font-semibold mb-2 "> Notas:</p>
                                    <span>{receta.notes}</span>

                                </div>


                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 ">Fermentables</h3>
                                    <ul>
                                        {receta.fermentables.map((fermentable, fermentableIndex) => (
                                            <li key={fermentableIndex} className="mb-1">
                                                {fermentable.amount} lbs - {fermentable.name} ({fermentable.color} SRM)
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 ">Lúpulos</h3>
                                    <ul>
                                        {receta.hops.map((hop, hopIndex) => (
                                            <li key={hopIndex} className="mb-1">
                                                {hop.name} - Cantidad: {hop.amount} - Uso: {hop.use} - Tiempo: {hop.time} - {hop.ibu} -{hop.alpha}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 ">Levadura</h3>
                                    <ul>
                                        {receta.yeasts.map((yeast, yeastIndex) => (
                                            <li key={yeastIndex} className="mb-1">
                                                {yeast.name} - Cantidad: {yeast.amount} - Tipo: {yeast.type}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 ">Adiciones</h3>
                                    <ul>
                                        {receta.miscs.map((misc, miscIndex) => (
                                            <li key={miscIndex} className="mb-1">
                                                {misc.name} - Tipo: {misc.type} - Cantidad: {misc.amount} - Unidad: {misc.unit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 ">Maceración</h3>
                                    <ul>
                                        {receta.mash.map((mas, masIndex) => (
                                            <li key={masIndex} className="mb-1">
                                                {mas.name}   {mas.stepTemp}º  - Tiempo: {mas.stepTime}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold mb-2 ">Fermentación</h3>
                                    <ul>
                                        {receta.fermentation.map((fermenta, fermentaIndex) => (
                                            <li key={fermentaIndex} className="mb-1">
                                                {fermenta.type} -  {fermenta.stepTemp}º - Tiempo: {fermenta.stepTime}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            <div className="ml-auto max-w-md ">
                                <img src={receta.image} className="rounded-xl "></img>
                            </div>
                        </main>
                    </div>
                </div>


            ))}



        </div >
    )


}