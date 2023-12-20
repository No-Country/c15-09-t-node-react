// el initialState tiene un user placeholder por ahora, cuando tenga el endpoint de autenticacion lo implemento
const initialState = {
  user: {
    id: 24,
    usuario: "pepe",
    email: "pepe@pepe.com",
    password: "$2b$10$yd/yIubrsWMvPw1HqSOSdepWA6/JZfcYYfeimCjeat9uqssq23lOC",
    confirmpass: "$2b$10$yd/yIubrsWMvPw1HqSOSdepWA6/JZfcYYfeimCjeat9uqssq23lOC",
    googlePass: "googlePass",
    Recetas: [
      {
        id: 5,
        name: "Brew Dog, Hazy Jane - Clone (DIY Dog #268)",
        author: "Brew Crew",
        image:
          "https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/users%2Fd1kXYFEOtjcJA2XE83wvFcWzu6I3%2Fimages%2Frecipes%2FzuVTvz2VFsgoOxSMlTYXWgLhmx5bXQ%2FzuVTvz2VFsgoOxSMlTYXWgLhmx5bXQ.jpeg?alt=media&token=6b76e620-2001-49cc-876b-252e0d6e5da1",
        type: "All Grain",
        alcoholByVolume: 5.91,
        originalGravity: 1055.419906,
        finalGravity: 1.01,
        ibu: 7.6,
        colorSRM: 3.6,
        batchSize: 13,
        mashWaterAmount: 9.12,
        spargeWaterAmount: 9.33,
        boilSize: null,
        boilTime: 60,
        mashTemperature: 66,
        mashTime: 25,
        mashOutTemperature: null,
        mashOutTime: null,
        primaryFermentationTemperature: 20,
        primaryFermentationTime: 14,
        seccondaryFermentationTemperature: null,
        seccondaryFermentationTime: null,
        notes:
          "Recipe copied from Brewdog & Friends magazine issue #001. Current recipe indicates the beer will be stronger than the original 5%. Scaled down from a 20L recipe.",
        EstiloId: 56,
        UserId: 4,
        Favoritos: {
          id: 25,
          UserId: 24,
          RecetaId: 5,
        },
        Fermentables: [
          {
            id: 17,
            cantidad: "2.238",
            MaltaId: 15,
            RecetaId: 5,
          },
          {
            id: 21,
            cantidad: "0.12",
            MaltaId: 18,
            RecetaId: 5,
          },
          {
            id: 20,
            cantidad: "0.136",
            MaltaId: 17,
            RecetaId: 5,
          },
          {
            id: 19,
            cantidad: "0.339",
            MaltaId: 16,
            RecetaId: 5,
          },
          {
            id: 18,
            cantidad: "0.543",
            MaltaId: 15,
            RecetaId: 5,
          },
        ],
        LupulosReceta: [
          {
            id: 35,
            cantidad: "0.6",
            tiempo: 10,
            ibu: "0.4",
            uso: "Boil",
            LupuloId: 1,
            RecetaId: 5,
          },
          {
            id: 36,
            cantidad: "11.4",
            tiempo: 0,
            ibu: "2.2",
            uso: "Boil",
            LupuloId: 6,
            RecetaId: 5,
          },
          {
            id: 37,
            cantidad: "11.4",
            tiempo: 0,
            ibu: "1.9",
            uso: "Boil",
            LupuloId: 1,
            RecetaId: 5,
          },
          {
            id: 38,
            cantidad: "11.4",
            tiempo: 0,
            ibu: "3.1",
            uso: "Boil",
            LupuloId: 4,
            RecetaId: 5,
          },
          {
            id: 39,
            cantidad: "28.3",
            tiempo: 2,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 6,
            RecetaId: 5,
          },
          {
            id: 40,
            cantidad: "28.3",
            tiempo: 2,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 9,
            RecetaId: 5,
          },
          {
            id: 41,
            cantidad: "28.3",
            tiempo: 2,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 10,
            RecetaId: 5,
          },
          {
            id: 42,
            cantidad: "28.3",
            tiempo: 2,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 4,
            RecetaId: 5,
          },
        ],
        LevadurasReceta: [
          {
            id: 1,
            cantidad: "2",
            LevaduraId: 5,
            RecetaId: 5,
          },
        ],
        AdicionesReceta: [],
        Estilo: {
          id: 56,
          version: 2.01,
          name: "American Pale Ale",
          category: "Pale American Ale",
          category_id: "18",
          style_id: "18B",
          category_description:
            "This category contains modern American ales of average strength and light color that are moderately malty to moderately bitter.",
          overall_impression:
            "An average-strength, hop-forward, pale American craft beer with sufficient supporting malt to make the beer balanced and drinkable. The clean hop presence can reflect classic or modern American or New World hop varieties with a wide range of characteristics.",
          aroma:
            "Moderate to moderately-high hop aroma from American or New World hop varieties with a wide range of possible characteristics, including citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. None of these specific characteristics are required, but a hoppy aroma should be apparent. Low to moderate neutral to grainy maltiness supports the hop presentation, and can show low amounts of specialty malt character (e.g., bread, toast, biscuit, caramel). Fruity esters optional, up to moderate in strength. Fresh dry-hop aroma optional.",
          appearance:
            "Pale golden to amber. Moderately large white to off-white head with good retention. Generally quite clear.",
          flavor:
            "Hop and malt character similar to aroma (same intensities and descriptors apply).Caramel flavors are often absent or fairly restrained, but are acceptable as long as they don’t clash with the hops.Moderate to high bitterness. Clean fermentation profile. Fruity yeast esters can be moderate to none, although many hop varieties are quite fruity.Medium to dry finish.The balance is typically towards the late hops and bitterness; the malt presence should be supportive, not distracting. Hop flavor and bitterness often linger into the finish, but the aftertaste should generally be clean and not harsh. Fresh dry-hop flavor optional.",
          mouthfeel:
            "Medium-light to medium body. Moderate to high carbonation. Overall smooth finish without astringency or harshness.",
          comments:
            "Modern American versions are often just lower gravity IPAs. Traditionally was a style that allowed for experimentation with hop varieties and usage methods, which can now often be found as international adaptations in countries with an emerging craft beer market. Judges should allow for characteristics of modern American or New World hops as they are developed and released.",
          history:
            "A modern American craft beer era adaptation of English pale ale, reflecting indigenous ingredients. Sierra Nevada Pale Ale was first made in 1980 and helped popularize the style. Prior to the explosion in popularity of IPAs, this style was the most well-known and popular of American craft beers.",
          style_comparison:
            "Typically lighter in color, cleaner in fermentation profile, and having fewer caramel flavors than English counterparts. There can be some overlap in color between American Pale Ale and American Amber Ale. The American Pale Ale will generally be cleaner, have a less caramelly malt profile, less body, and often more finishing hops. Less bitterness in the balance and alcohol strength than an American IPA. Maltier, more balanced and drinkable, and less intensely hop-focused and bitter than session-strength American IPAs (aka Session IPAs). More bitter and hoppy than a Blonde Ale.",
          tags: "standard-strength, pale-color, top-fermented, north-america, craft-style, pale-ale-family, bitter, hoppy",
          original_gravity_min: 1.045,
          original_gravity_max: 1.06,
          ibu_min: 30,
          ibu_max: 50,
          final_gravity_min: 1.01,
          final_gravity_max: 1.015,
          abv_min: 4.5,
          abv_max: 6.2,
          color_min: 5,
          color_max: 10,
          ingredients:
            "Neutralpale malt. American or New World hops. Neutral to lightly fruity American or English ale yeast. Small amounts of various specialty malts.",
          examples:
            "Deschutes Mirror Pond Pale Ale, Half Acre Daisy Cutter Pale Ale, Great Lakes Burning River, La Cumbre Acclimated APA, Sierra Nevada Pale Ale, Stone Pale Ale 2.0",
          style_guide: "BJCP2021",
          type: "beer",
        },
      },
      {
        id: 1,
        name: "Brewdog Punk IPA Clone",
        author: "VoC Home Brewery",
        image:
          "https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/users%2FIcvPXhwhZUfvvKDf04dZyNXF6Cx1%2Fimages%2Frecipes%2FFnabVDFibAGDn6ejr98jwsxsHuQBM9%2FFnabVDFibAGDn6ejr98jwsxsHuQBM9.jpeg?alt=media&token=6b76e620-2001-49cc-876b-252e0d6e5da1",
        type: "All Grain",
        alcoholByVolume: 5.78,
        originalGravity: 1051.338016,
        finalGravity: 1.007,
        ibu: 105.1,
        colorSRM: 7.9,
        batchSize: 23,
        mashWaterAmount: 23.86,
        spargeWaterAmount: 13.66,
        boilSize: null,
        boilTime: 60,
        mashTemperature: 66,
        mashTime: 75,
        mashOutTemperature: 75,
        mashOutTime: 10,
        primaryFermentationTemperature: 18,
        primaryFermentationTime: 10,
        seccondaryFermentationTemperature: null,
        seccondaryFermentationTime: null,
        notes:
          "Punk IPA clone from the GF recipe library, this came out as close to an original beer that I've brewed, genuinely nice beer, looks, smells, and most importantly tastes pretty close to the original. Wyeast 1056 American Ale Yeast is a good sub for US05. The Moderately Hard water profile is for my area which I use every brew day.",
        EstiloId: 56,
        UserId: 1,
        Favoritos: {
          id: 23,
          UserId: 24,
          RecetaId: 1,
        },
        Fermentables: [
          {
            id: 2,
            cantidad: "0.26",
            MaltaId: 2,
            RecetaId: 1,
          },
          {
            id: 1,
            cantidad: "5.23",
            MaltaId: 1,
            RecetaId: 1,
          },
        ],
        LupulosReceta: [
          {
            id: 1,
            cantidad: "26.7",
            tiempo: 60,
            ibu: "34.7",
            uso: "Boil",
            LupuloId: 1,
            RecetaId: 1,
          },
          {
            id: 2,
            cantidad: "16.6",
            tiempo: 60,
            ibu: "10",
            uso: "Boil",
            LupuloId: 2,
            RecetaId: 1,
          },
          {
            id: 3,
            cantidad: "20",
            tiempo: 30,
            ibu: "20.8",
            uso: "Boil",
            LupuloId: 1,
            RecetaId: 1,
          },
          {
            id: 4,
            cantidad: "12.5",
            tiempo: 30,
            ibu: "6",
            uso: "Boil",
            LupuloId: 2,
            RecetaId: 1,
          },
          {
            id: 5,
            cantidad: "27.5",
            tiempo: 10,
            ibu: "16.1",
            uso: "Boil",
            LupuloId: 1,
            RecetaId: 1,
          },
          {
            id: 6,
            cantidad: "12.5",
            tiempo: 10,
            ibu: "3.4",
            uso: "Boil",
            LupuloId: 2,
            RecetaId: 1,
          },
          {
            id: 7,
            cantidad: "12.5",
            tiempo: 10,
            ibu: "6.8",
            uso: "Boil",
            LupuloId: 3,
            RecetaId: 1,
          },
          {
            id: 8,
            cantidad: "12.5",
            tiempo: 10,
            ibu: "7.3",
            uso: "Boil",
            LupuloId: 4,
            RecetaId: 1,
          },
          {
            id: 9,
            cantidad: "47.5",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 1,
            RecetaId: 1,
          },
          {
            id: 10,
            cantidad: "37.5",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 2,
            RecetaId: 1,
          },
          {
            id: 11,
            cantidad: "37.5",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 5,
            RecetaId: 1,
          },
          {
            id: 12,
            cantidad: "37.5",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 4,
            RecetaId: 1,
          },
          {
            id: 13,
            cantidad: "20",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 3,
            RecetaId: 1,
          },
          {
            id: 14,
            cantidad: "10",
            tiempo: 4,
            ibu: "0",
            uso: "Dry Hop",
            LupuloId: 6,
            RecetaId: 1,
          },
        ],
        LevadurasReceta: [
          {
            id: 2,
            cantidad: "1",
            LevaduraId: 1,
            RecetaId: 1,
          },
        ],
        AdicionesReceta: [],
        Estilo: {
          id: 56,
          version: 2.01,
          name: "American Pale Ale",
          category: "Pale American Ale",
          category_id: "18",
          style_id: "18B",
          category_description:
            "This category contains modern American ales of average strength and light color that are moderately malty to moderately bitter.",
          overall_impression:
            "An average-strength, hop-forward, pale American craft beer with sufficient supporting malt to make the beer balanced and drinkable. The clean hop presence can reflect classic or modern American or New World hop varieties with a wide range of characteristics.",
          aroma:
            "Moderate to moderately-high hop aroma from American or New World hop varieties with a wide range of possible characteristics, including citrus, floral, pine, resin, spice, tropical fruit, stone fruit, berry, or melon. None of these specific characteristics are required, but a hoppy aroma should be apparent. Low to moderate neutral to grainy maltiness supports the hop presentation, and can show low amounts of specialty malt character (e.g., bread, toast, biscuit, caramel). Fruity esters optional, up to moderate in strength. Fresh dry-hop aroma optional.",
          appearance:
            "Pale golden to amber. Moderately large white to off-white head with good retention. Generally quite clear.",
          flavor:
            "Hop and malt character similar to aroma (same intensities and descriptors apply).Caramel flavors are often absent or fairly restrained, but are acceptable as long as they don’t clash with the hops.Moderate to high bitterness. Clean fermentation profile. Fruity yeast esters can be moderate to none, although many hop varieties are quite fruity.Medium to dry finish.The balance is typically towards the late hops and bitterness; the malt presence should be supportive, not distracting. Hop flavor and bitterness often linger into the finish, but the aftertaste should generally be clean and not harsh. Fresh dry-hop flavor optional.",
          mouthfeel:
            "Medium-light to medium body. Moderate to high carbonation. Overall smooth finish without astringency or harshness.",
          comments:
            "Modern American versions are often just lower gravity IPAs. Traditionally was a style that allowed for experimentation with hop varieties and usage methods, which can now often be found as international adaptations in countries with an emerging craft beer market. Judges should allow for characteristics of modern American or New World hops as they are developed and released.",
          history:
            "A modern American craft beer era adaptation of English pale ale, reflecting indigenous ingredients. Sierra Nevada Pale Ale was first made in 1980 and helped popularize the style. Prior to the explosion in popularity of IPAs, this style was the most well-known and popular of American craft beers.",
          style_comparison:
            "Typically lighter in color, cleaner in fermentation profile, and having fewer caramel flavors than English counterparts. There can be some overlap in color between American Pale Ale and American Amber Ale. The American Pale Ale will generally be cleaner, have a less caramelly malt profile, less body, and often more finishing hops. Less bitterness in the balance and alcohol strength than an American IPA. Maltier, more balanced and drinkable, and less intensely hop-focused and bitter than session-strength American IPAs (aka Session IPAs). More bitter and hoppy than a Blonde Ale.",
          tags: "standard-strength, pale-color, top-fermented, north-america, craft-style, pale-ale-family, bitter, hoppy",
          original_gravity_min: 1.045,
          original_gravity_max: 1.06,
          ibu_min: 30,
          ibu_max: 50,
          final_gravity_min: 1.01,
          final_gravity_max: 1.015,
          abv_min: 4.5,
          abv_max: 6.2,
          color_min: 5,
          color_max: 10,
          ingredients:
            "Neutralpale malt. American or New World hops. Neutral to lightly fruity American or English ale yeast. Small amounts of various specialty malts.",
          examples:
            "Deschutes Mirror Pond Pale Ale, Half Acre Daisy Cutter Pale Ale, Great Lakes Burning River, La Cumbre Acclimated APA, Sierra Nevada Pale Ale, Stone Pale Ale 2.0",
          style_guide: "BJCP2021",
          type: "beer",
        },
      },
      {
        id: 3,
        name: "Guiness Clone",
        author: "Bruce Itterman Take based on BYO article",
        image:
          "https://firebasestorage.googleapis.com/v0/b/brewfather-app.appspot.com/o/users%2F8VMuE1RXkbaIE8yzZ2kHAa0Ekmr2%2Fimages%2Frecipes%2F8kszgVBkoRehrtSGn5XGGzu1trixzG%2F8kszgVBkoRehrtSGn5XGGzu1trixzG.jpeg?alt=media&token=6b76e620-2001-49cc-876b-252e0d6e5da1",
        type: "All Grain",
        alcoholByVolume: 4.33,
        originalGravity: 1044.557092,
        finalGravity: 1.012,
        ibu: 39.9,
        colorSRM: 36.6,
        batchSize: 23,
        mashWaterAmount: 13.29,
        spargeWaterAmount: 14.75,
        boilSize: null,
        boilTime: 60,
        mashTemperature: 65,
        mashTime: 90,
        mashOutTemperature: 74,
        mashOutTime: 10,
        primaryFermentationTemperature: 19,
        primaryFermentationTime: 14,
        seccondaryFermentationTemperature: null,
        seccondaryFermentationTime: null,
        notes:
          "To mash a batch of Guinness, you’ll need 22 tons of grist (48,501 lb.) of around 65 percent pale malt, 25 percent raw barley, and 10 percent roast. Add that to 50 tons of water (13,233 gallons) in the mash tun, where huge, automatic paddles and knives rotate through the mash to keep it loose and well-mixed.",
        EstiloId: 45,
        UserId: 3,
        Favoritos: {
          id: 24,
          UserId: 24,
          RecetaId: 3,
        },
        Fermentables: [
          {
            id: 10,
            cantidad: "1.107",
            MaltaId: 6,
            RecetaId: 3,
          },
          {
            id: 11,
            cantidad: "0.443",
            MaltaId: 8,
            RecetaId: 3,
          },
          {
            id: 9,
            cantidad: "2.88",
            MaltaId: 9,
            RecetaId: 3,
          },
        ],
        LupulosReceta: [
          {
            id: 17,
            cantidad: "69",
            tiempo: 60,
            ibu: "39.9",
            uso: "Boil",
            LupuloId: 7,
            RecetaId: 3,
          },
        ],
        LevadurasReceta: [
          {
            id: 4,
            cantidad: "1",
            LevaduraId: 3,
            RecetaId: 3,
          },
        ],
        AdicionesReceta: [],
        Estilo: {
          id: 45,
          version: 2.01,
          name: "Irish Stout",
          category: "Irish Beer",
          category_id: "15",
          style_id: "15B",
          category_description:
            "The traditional beers of Ireland contained in this category are amber to dark, top-fermented beers of moderate to slightly strong strength, and are often widely misunderstood due to differences in export versions, or overly focusing on the specific attributes of beer produced by high-volume, well-known breweries. Each of the styles in this grouping has a wider range than is commonly believed.",
          overall_impression:
            "A black beer with a pronounced roasted flavor, often similar to coffee. The balance can range from fairly even to quite bitter, with the more balanced versions having a little malty sweetness and the bitter versions being quite dry. Draught versions typically are creamy from a nitro pour, but bottled versions will not have this dispense-derived character. The roasted flavor can range from dry and coffee-like to somewhat chocolaty.",
          aroma:
            "Moderate coffee-like aroma typically dominates; may have slight dark chocolate, cocoa,or roasted grain secondary notes. Medium-low esters optional. Low earthy or floral hop aroma optional.",
          appearance:
            "Jet black to deep brown with garnet highlights in color. According to Guinness, “Guinness beer may appear black, but it is actually a very dark shade of ruby.” Opaque. A thick, creamy, long-lasting, tan- to brown-colored head is characteristic when served on nitro, but don’t expect a tight, creamy head on a bottled beer.",
          flavor:
            "Moderate roasted grain or malt flavor with a medium to high bitterness. The finish can be dry and coffee-like to moderately balanced with a touch of caramel or malty sweetness. Typically has coffee-like flavors, but also may have a bittersweet or unsweetened chocolate character in the palate, lasting into the finish. Balancing factors may include some creaminess, medium-low fruitiness, or medium earthy hop flavor. The level of bitterness is somewhat variable, as is the roasted character and the dryness of the finish; allow for interpretation by brewers.",
          mouthfeel:
            "Medium-light to medium-full body, with a somewhat creamy character – especially when served by nitro pour. Low to moderate carbonation. For the high hop bitterness and significant proportion of dark grains present, this beer is remarkably smooth. May have a light astringency from the roasted grains, although harshness is undesirable.",
          comments:
            "Traditionally a draught product. Modern examples are almost always associated with a nitro pour. Do not expect bottled beers to have the full, creamy texture or very long-lasting head associated with mixed-gas dispense. Regional differences exist in Ireland, similar to variability in English Bitters. Dublin-type stouts use roasted barley, are more bitter, and are drier. Cork-type stouts are sweeter, less bitter, and have flavors from chocolate and specialty malts.",
          history:
            "The style evolved from London porters, but reflecting a fuller, creamier, more “stout” body and strength. Guinness began brewing only porter in 1799, and a “stouter kind of porter” around 1810. Irish stout diverged from London single stout (or simply porter) in the late 1800s, with an emphasis on darker malts and roast barley. Guinness began using flaked barley after WWII, and Guinness Draught was launched as a brand in 1959. Draught (“widget”) cans and bottles were developed in the late 1980s and 1990s.",
          style_comparison:
            "Lower strength than an Irish Extra Stout. Darker in color (black) than an English Porter (brown).",
          tags: "standard-strength, dark-color, top-fermented, british-isles, traditional-style, stout-family, bitter, roasty",
          original_gravity_min: 1.036,
          original_gravity_max: 1.044,
          ibu_min: 25,
          ibu_max: 45,
          final_gravity_min: 1.007,
          final_gravity_max: 1.011,
          abv_min: 3.8,
          abv_max: 5,
          color_min: 25,
          color_max: 40,
          ingredients:
            "Dark roasted malts or grains, enough to make the beer black in color. Pale malt. May use unmalted grains for body.",
          examples:
            "Beamish Irish Stout, Belhaven Black Stout, Guinness Draught, Murphy's Irish Stout, O’Hara’s Irish Stout, Porterhouse Irish Stout",
          style_guide: "BJCP2021",
          type: "beer",
        },
      },
    ],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "REMOVE_RECIPE": {
      // Filter out the recipe with the specified ID
      const updatedRecipes = state.user.Recetas.filter((recipe) => recipe.id !== action.payload);

      // Return the updated state
      return {
        ...state,
        user: {
          ...state.user,
          Recetas: updatedRecipes,
        },
      };
    }
    default:
      return state;
  }
};

export default userReducer;
