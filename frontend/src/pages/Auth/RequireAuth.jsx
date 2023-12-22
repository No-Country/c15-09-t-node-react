import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserByToken } from "../../services/user";
import { setUser } from "../../redux/actions/userActions";

function RequireAuth({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Obtén el token del almacenamiento local
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      // Si el token existe, haz una solicitud al servidor para obtener los datos del usuario
      getUserByToken(authToken)
        .then((user) => {
          // Si la solicitud tiene éxito, pon los datos del usuario en el estado de Redux
          dispatch(setUser(user));
          localStorage.setItem("authToken", authToken);
        })
        .catch((error) => {
          localStorage.removeItem("authToken");
          console.error("Error: ", error);
          navigate("/");
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Si 'user' o 'user.token' es 'undefined', redirige al usuario
  if (loading) {
    return null; // o un componente de carga
  }

  if (user && localStorage.getItem("authToken")) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default RequireAuth;
