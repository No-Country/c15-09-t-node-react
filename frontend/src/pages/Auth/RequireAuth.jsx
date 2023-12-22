import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserByToken } from "../../services/user";
import { setUser } from "../../redux/actions/userActions";

function RequireAuth({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtén el token del almacenamiento local
    const authToken = localStorage.getItem("authToken");
    console.log(authToken);

    if (authToken) {
      // Si el token existe, haz una solicitud al servidor para obtener los datos del usuario
      getUserByToken(authToken)
        .then((user) => {
          // Si la solicitud tiene éxito, pon los datos del usuario en el estado de Redux
          dispatch(setUser(user));
          localStorage.setItem("authToken", authToken);
          console.log("este es el user redux", user);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          // Independientemente de si la solicitud tiene éxito o falla, establece 'loading' en 'false'
          setLoading(false);
        });
    } else {
      // Si 'authToken' es 'null', limpia el token y establece 'loading' en 'false'
      localStorage.removeItem("authToken");
      setLoading(false);
    }
  }, [dispatch]);

  // Si 'user' o 'user.token' es 'undefined', redirige al usuario
  if (loading) {
    console.log("esto es dentro del loading");

    return null; // o un componente de carga
  }

  if (user && localStorage.getItem("authToken")) {
    console.log("esto es user.token", user.token);
    return children;
  } else {
    // console.log("esto es user, dentro del condicional", user);
    // console.log("esto es user.token, dentro del condicional", user.token);
    // console.log(user && user.token);

    return <Navigate to="/" />;
  }
}

export default RequireAuth;
