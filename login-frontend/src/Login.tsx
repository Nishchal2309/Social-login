import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}>LOGIN</button>
    </div>
  );
};

export default Login;
