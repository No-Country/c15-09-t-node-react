import { Outlet } from "react-router-dom";
import { ProfileButtons } from "../profile/ProfileButtons";

export const ProfileLayout = () => {
  return (
    <section className="mt-14">
      <h1 className="text-gray-dark">Mi perfil</h1>

      <div className="flex items-end mt-14 font-poppings">
        <img src="https://i.postimg.cc/CxwFVQkx/Ellipse-1631.png" alt="user-image" />
        <p className="ml-5 text-5xl">Jane Daniel</p>
      </div>

      <ProfileButtons />

      <Outlet />
    </section>
  );
};
