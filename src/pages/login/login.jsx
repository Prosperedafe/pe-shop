import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login">
        <div>
          <h1>
            YOUR
            <br /> ART
            <br /> MUSEUM
          </h1>
          <p className="address">
            151 3rd st <br /> San Francisco, CA 94103
          </p>
          <form>
            <input type="email" placeholder="Email address" />
            <br />
            <input type="password" placeholder="Password" />
            <p className="forgot-pasword">Forgot your password?</p>{" "}
            <Link to="/home">
              <button>Login</button>
            </Link>
            <p className="account">Don't have an account?</p>
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
