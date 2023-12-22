import { RouterProvider } from "react-router-dom";
import { router } from "./router";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { setUser } from "./redux/actions/userActions";

export const App = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Obtén el token del almacenamiento local
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     // Si el token existe, haz una solicitud al servidor para obtener los datos del usuario
  //     // TODO: arreglar aca, endpoint para mandar el token
  //     fetch("/api/user", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // Si la solicitud tiene éxito, pon los datos del usuario en el estado de Redux
  //         // TODO: cambiar aca dependiendo de como vengan los datos de usuario
  //         dispatch(setUser(data.user));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         navigate("/");
  //       });
  //   }
  //   // creo que no es necesario
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [dispatch]);

  return <RouterProvider router={router} />;
};
