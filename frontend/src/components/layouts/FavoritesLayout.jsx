import { Outlet } from "react-router-dom";
import { ActionButtons } from "../favorites/ActionButtons";

export const FavoritesLayout = () => {
  return (
    <section className="mt-14">
      <ActionButtons />
      <Outlet />
    </section>
  );
};
