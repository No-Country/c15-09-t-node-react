import { useState } from "react";
import amberAle from "../assets/images/amber-ale.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ZoomImage from "../components/ZoomImage";

// placeholder por ahora
export const StyleDetails = () => {
  const [favorite, setFavorite] = useState(false);

  // TODO: agregar tooltips

  const totalSrm = 40;
  const totalIbu = 100;
  const totalAbv = 15;

  function calculatePercentage(value, totalType) {
    return (value / totalType) * 100;
  }

  // hacer esto prop cuando tenga la info
  const json = {
    name: "American Light Lager",
    category: "Standard American Beer",
    category_id: "1",
    style_id: "1A",
    category_description:
      "This category describes everyday American beers that have a wide public appeal. Containing both ales and lagers, the beers of this category are not typically complex, and have smooth, accessible flavors. The ales tend to have lager-like qualities, or are designed to appeal to mass-market lager drinkers as crossover beers. Mass-market beers with a more international appeal or origin are described in the International Lager category.",
    overall_impression:
      "A highly carbonated, very light-bodied, nearly flavorless lager designed to be consumed very cold. Very refreshing and thirst-quenching.",
    aroma:
      "Low malt aroma optional, but may be perceived as grainy, sweet, or corn-like, if present. Light spicy, floral, or herbal hop aroma optional. While a clean fermentation profile is desirable, a light amount of yeast character is not a fault.",
    appearance:
      "Very pale straw to pale yellow color. White, frothy head seldom persists. Very clear.",
    flavor:
      "Relatively neutral palate with a crisp, dry finish and a low to very low grainy or corn-like flavor that might be perceived as sweetness due to the low bitterness. Low floral, spicy, or herbal hop flavor optional, but is rarely strong enough to detect. Low to very low bitterness. Balance may vary from slightly malty to slightly bitter, but is usually close to even. High carbonation may accentuate the crispness of the dry finish. Clean fermentation profile.",
    mouthfeel:
      "Very light, sometimes watery, body. Very highly carbonated with slight carbonic bite on the tongue.",
    comments:
      "Designed to appeal to as broad a range of the general public as possible. Strong flavors are a fault. With little malt or hop flavor, the yeast character often is what most differentiates brands.",
    history:
      "Coors briefly made a light lager in the early 1940s. Modern versions were first produced by Rheingold in 1967 to appeal to diet-conscious drinkers, but only became popular starting in 1973 after Miller Brewing acquired the recipe and marketed the beer heavily to sports fans with the “tastes great, less filling” campaign. Beers of this genre became the largest sellers in the United States in the 1990s.",
    style_comparison:
      "A lighter-bodied, lower-alcohol, lower calorie version of an American Lager. Less hop character and bitterness than a German Leichtbier.",
    tags: "session-strength, pale-color, bottom-fermented, lagered, north-america, traditional-style, pale-lager-family, balanced",
    original_gravity: {
      minimum: {
        unit: "sg",
        value: 1.028,
      },
      maximum: {
        unit: "sg",
        value: 1.04,
      },
    },
    international_bitterness_units: {
      minimum: {
        unit: "IBUs",
        value: 8,
      },
      maximum: {
        unit: "IBUs",
        value: 12,
      },
    },
    final_gravity: {
      minimum: {
        unit: "sg",
        value: 0.998,
      },
      maximum: {
        unit: "sg",
        value: 1.008,
      },
    },
    alcohol_by_volume: {
      minimum: {
        unit: "%",
        value: 2.8,
      },
      maximum: {
        unit: "%",
        value: 4.2,
      },
    },
    color: {
      minimum: {
        unit: "SRM",
        value: 2,
      },
      maximum: {
        unit: "SRM",
        value: 3,
      },
    },
    ingredients:
      "Two- or six-row barley with up to 40% rice or corn as adjuncts. Additional enzymes can further lighten the body and lower carbohydrates. Lager yeast. Negligible hops.",
    examples:
      "Bud Light, Coors Light, Grain Belt Premium Light American Lager, Michelob Light, Miller Lite, Old Milwaukee Light",
    style_guide: "BJCP2021",
    type: "beer",
  };

  return (
    <div className="container font-poppings">
      <main className="flex mt-16">
        <div>
          <ZoomImage
            src={amberAle}
            alt="Zoomable Image"
            zoomArea={{ x: 1, y: 1, width: 1, height: 1 }} // ajusta según tus necesidades
          />
        </div>
        <div className="ml-auto max-w-xl">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold mr-4">{json.name}</h1>
            {favorite === false ? (
              <FavoriteBorderIcon
                className="scale-150 text-red-900"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
            ) : (
              <FavoriteIcon
                className="scale-150 text-red-900"
                onClick={() => {
                  setFavorite(!favorite);
                }}
              />
            )}
          </div>

          <p className="font-normal mt-6">{json.overall_impression}</p>
          <div className="flex mt-12 text-[18px]">
            <h6 className="text-[#DB8116] font-bold mr-1">CATEGORY:</h6>{" "}
            <h6 className="font-semibold uppercase">{json.category}</h6>
          </div>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">PALE</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#ffe699] via-[#962d00] to-[#36080a] rounded-xl relative">
              {" "}
              <span
                style={{
                  left: `${calculatePercentage(json.color.minimum.value, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(json.color.maximum.value, totalSrm)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">DARK</p>
          </div>
          <p className="font-bold text-[#DB8116] mx-auto w-fit">
            {json.color.minimum.value}-{json.color.maximum.value} SRM (COLOR)
          </p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#000000] to-[#909922] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(
                    json.international_bitterness_units.minimum.value,
                    totalIbu
                  )}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(
                    json.international_bitterness_units.maximum.value,
                    totalIbu
                  )}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#B3B554] mx-auto w-fit">
            {json.international_bitterness_units.minimum.value}-
            {json.international_bitterness_units.maximum.value} IBU (BITTERNESS)
          </p>
          <div className="flex items-center text-xs font-medium mt-10 mb-4">
            <p className="mr-1">LOW</p>
            <span className="block w-11/12 h-3 bg-gradient-to-r from-[#e7e4c1] to-[#d1bf51] rounded-xl relative">
              <span
                style={{
                  left: `${calculatePercentage(json.alcohol_by_volume.minimum.value, totalAbv)}%`,
                }}
                className="absolute h-full  dark:text-white text-3xl bottom-2"
              >
                [
              </span>
              <span
                style={{
                  left: `${calculatePercentage(json.alcohol_by_volume.maximum.value, totalAbv)}%`,
                }}
                className="absolute h-full  text-3xl bottom-2"
              >
                ]
              </span>
            </span>
            <p className="ml-1">HIGH</p>
          </div>
          <p className="font-bold text-[#DED490] mx-auto w-fit">
            {json.alcohol_by_volume.minimum.value}-{json.alcohol_by_volume.maximum.value}%
            ABV(ALCOHOL)
          </p>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-12">
            ORIGINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              {json.original_gravity.minimum.value}-{json.original_gravity.maximum.value}%
              OG(ORIGINAL GRAVITY)
            </span>
          </h6>
          <h6 className="text-[#DB8116] font-bold text-[18px] mt-4">
            FINAL GRAVITY:
            <span className="text-[#DED490] font-semibold ml-2">
              {json.final_gravity.minimum.value}-{json.final_gravity.maximum.value}% FG(FINAL
              GRAVITY)
            </span>
          </h6>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">APPEAREANCE</h1>
            <p className="font-normal">{json.appearance}</p>
          </div>
          <div>
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">AROMA</h1>
            <p className="font-normal">{json.aroma}</p>
          </div>
          <div className="mb-8">
            <h1 className="text-4xl mb-2 font-bold text-[#DB8116] mt-8">FLAVOR</h1>
            <p className="font-normal">{json.flavor}</p>
          </div>
        </div>
      </main>
    </div>
  );
};
