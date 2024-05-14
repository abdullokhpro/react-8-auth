import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { toast } from "react-toastify";
import axios from "../../api";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loadin, setLoading] = useState(false);

  const hangleLogin = (e) => {
    e.preventDefault();

    let user = { username, password };

    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        toast.error("username or password is incorrect");
      });
  };

  return (
    <div className="login">
      <h2>Login</h2>

      <form onSubmit={hangleLogin} className="login__form" action="">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="login__input"
          type="text"
          name=""
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="login__input"
          type="password"
          name=""
        />
        <button className="login__btn">Log in</button>
      </form>

      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default memo(Login);
