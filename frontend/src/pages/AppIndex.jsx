import { Carousel } from "../components/Carrousel";
import { CardIndex } from "../components/CardIndex";

import "../assets/styles/components/app-index.css";

export const AppIndex = () => {
  return (
    <div>
      <div className="mt-9">
        <Carousel />
      </div>

      <CardIndex />
    </div>
  );
};
