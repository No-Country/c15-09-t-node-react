import { Outlet } from "react-router-dom";
import { ActionButtons } from "../favorites/ActionButtons";

export const FavoritesLayout = () => {
  return (
    <section className="">
      <ActionButtons />
      <div className="h-[435px] max-h-[435px]">
        <Outlet />
      </div>
    </section>
  );
};
