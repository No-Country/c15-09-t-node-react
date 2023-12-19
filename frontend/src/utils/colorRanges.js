import AmericanCreamAle from "../assets/images/srm-images/0-3 SRM/american-cream-ale.jpg";
import BlondeAle from "../assets/images/srm-images/4-7 SRM/new-england-ipa.jpg";
import AmberAle from "../assets/images/srm-images/8-26 SRM/amber-ale.jpg";
import BalticStylePorter from "../assets/images/srm-images/27-34 SRM/baltic-style-porter.jpg";
import AmericanStout from "../assets/images/srm-images/35-40 SRM/american-stout.jpg";

// Define your color ranges and corresponding images
export const colorRanges = [
  { min: 0, max: 4, image: AmericanCreamAle },
  { min: 4, max: 7, image: BlondeAle },
  { min: 7, max: 26, image: AmberAle },
  { min: 26, max: 34, image: BalticStylePorter },
  { min: 34, max: 40, image: AmericanStout },
];
