import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const FrontPage = () => {
  const { logout, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<String>();
  useEffect(() => {
    // when the user is authenticated
    console.log("is it authenticated", isAuthenticated);

    const fetchTokenWhenAuth = async () => {
      if (isAuthenticated) {
        const getToken = await getAccessTokenSilently();
        console.log("this is token", { getToken });
        setToken(getToken);
      }
    };
    fetchTokenWhenAuth();
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    console.log("token has been updated", { token });

    if (token != null && token != "") {
      console.log("lets call the api");
      const getApiResponse = async () => {
        const resp = await fetch("http://localhost:8080/okta/privatescope", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const resultString = await resp.text();
        console.log("this is the api response : ", resultString);
      };
      getApiResponse();
    }
  }, [token]);

  return (
    <div className="card">
      {isAuthenticated ? (
        <div>
          <button
            onClick={() =>
              logout({
                logoutParams: { returnTo: "http://localhost:5173/" },
              })
            }
          >
            LOGOUT
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FrontPage;
