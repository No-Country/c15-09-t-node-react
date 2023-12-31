import { Outlet } from "react-router-dom";
import { ActionButtons } from "../favorites/ActionButtons";
import profileBackground from "../../assets/images/profile-background.jpg";
import profilePhoto from "../../assets/images/profile-photo.jpg";
import { useSelector } from "react-redux";

export const ProfileLayout = () => {
  const user = useSelector((state) => state.user);

  return (
    <section className="relative font-poppings">
      <div className="h-[300px] w-full relative">
        <div className="text-stone-100 z-10 relative mx-auto text-center top-28">
          <h1>{user.usuario}</h1>
          <p className="mb-4">{user.email}</p>
          <div className="overflow-hidden w-32 h-32 relative rounded-full mx-auto">
            <img src={profilePhoto} className="absolute" />
          </div>
        </div>
        <div
          className="absolute inset-0 brightness-50 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${profileBackground})` }}
        />
      </div>
      <ActionButtons />
      <Outlet />
    </section>
  );
};
