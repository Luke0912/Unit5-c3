import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const EmployeeList = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      console.log(data);
      setEmployees(data);
    });
  }, []);
  const handelRedirect = (id) => {
    navigate(`/employees/${id}`);
  };

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {employees.map((employee) => (
        <div
          className="employee_card"
          key={employee.id}
          onClick={handelRedirect.bind(null, employee.id)}
        >
          <img className="employee_image" src={employee.image} alt="" />
          <span className="employee_name">{employee.employee_name}</span>
          <span className="employee_title">{employee.title}</span>
        </div>
      ))}
    </div>
  );
};
