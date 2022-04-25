import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../Contexts/AuthContext";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const val = e.target.value;
    setDetails({
      ...details,
      [e.target.name]: val,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post("https://reqres.in/api/login", details);
      console.log(resp);
      if (resp.status !== 200) {
        throw new Error("Unable to login");
      }
      handleAuth(true);
      navigate(-2, {replace:true}) 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="loginform" onSubmit={submitHandler}>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
