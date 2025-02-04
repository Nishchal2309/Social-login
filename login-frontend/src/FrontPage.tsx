import { useAuth0 } from "@auth0/auth0-react";

const FrontPage = () => {
  const { logout } = useAuth0();
  return (
    <div className="card">
      <h2>CLick below to logout</h2>
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
  );
};

export default FrontPage;
