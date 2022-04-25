import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [obj, setObj] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then((data) => {
      setObj(data.data);
      console.log(data.data)
    });
  }, []);
  return (
    <div className="user_details">
      <img className="user_image" src={obj.image} />
      <h4 className="user_name">{obj.employee_name}</h4>
      <span className="user_salary">{obj.salary}$</span>
      {/* <span className="tasks">
        {obj.tasks.map((e) => (
          <li className="task" key={e}>
            {e}
          </li>
        ))}
      </span> */}
      Status: <b className="status">{obj.status}</b>
      Title: <b className="title">{obj.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {obj.status !== "terminated" && (
        <button className="fire">Fire Employee</button>
      )}
      {/* Show this button only if user is not already team lead or terminated */}
      {obj.status !== "terminated" && obj.title !== "Team Lead" && (
        <button className="promote">promote</button>
      )}
    </div>
  );
};
