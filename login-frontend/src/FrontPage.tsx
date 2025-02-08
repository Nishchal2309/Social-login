import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const FrontPage = () => {
  const { logout, isAuthenticated } = useAuth0();
  useEffect(() => {
    console.log("is authenticated", { isAuthenticated });
  }, [isAuthenticated]);
  return (
    <div className="card">
      <button
        onClick={() =>
          logout({
            logoutParams: { returnTo: "http://localhost:5173/" },
          })
        }
      >
        LOGOUT when authenticated
      </button>
    </div>
  );
};

export default FrontPage;
