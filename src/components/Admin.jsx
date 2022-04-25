import { useState } from "react";
import axios from "axios";

export const Admin = () => {
  const [details, setDetails] = useState({
    employee_name: "",
    employee_id: "",
    title: "",
    salary: "",
    image: "",
    username: "",
    password: "",
    tasks: [],
    status: "",
    team: "",
  });
  const detailHandler = (e) => {
    var value = e.target.value;
    if (e.target.name === "tasks") {
      value = value.split(",");
    }
    setDetails({
      ...details,
      [e.target.name]: value,
    });
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const resp = await axios.post("http://localhost:8080/employee", details);
      console.log(resp);
      if (resp.status !== 200) {
        throw new Error("Unable to submit");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <form className="createEmployee" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Employee Name"
        name="employee_name"
        onChange={detailHandler}
      />
      <input
        type="text"
        placeholder="Employee id"
        name="employee_id"
        onChange={detailHandler}
      />
      <select name="title" onChange={detailHandler}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input
        type="number"
        placeholder="Salary"
        name="salary"
        onChange={detailHandler}
      />
      <input
        type="text"
        placeholder="Image"
        name="image"
        onChange={detailHandler}
      />
      <input
        type="text"
        placeholder="User Name"
        name="username"
        onChange={detailHandler}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={detailHandler}
      />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={detailHandler}
      />
      <select name="status" id="status" onChange={detailHandler}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={detailHandler}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
