import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
export const Logout = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    handleAuth(false);
    navigate("/");
  }, []);
  // log user out. it's just an inmemory value in context api
  return;
  <div></div>;
};
