import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import FrontPage from "./FrontPage";
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log("is authenticated", { isAuthenticated });
  }, [isAuthenticated]);
  return (
    <div>
      {/* {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>LOGIN</button>
      ) : (
        <>
          <FrontPage></FrontPage>
        </>
      )} */}
      <button onClick={() => loginWithRedirect()}>LOGIN</button>
    </div>
  );
};

export default Login;
