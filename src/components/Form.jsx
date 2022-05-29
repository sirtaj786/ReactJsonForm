import React, { useEffect } from "react";
import style from "./Form.module.css";

const Form = ({ data, setData, setUserData, userData }) => {
  const appendUserData = (e) => {
    e.preventDefault();
    setUserData([...userData, data]);
    document.getElementById("form").reset();

    console.log(data);

    fetch("http://localhost:8080/data", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        address: data.address,
        department: data.department,
        age: data.age,
        salary: data.salary,
        married: data.married,
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  const changeHandler = (e) => {
    let { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  return (
    <div className={style.formdiv}>
      <form className={style.form} id="form">
        <input
          required
          name="name"
          type="text"
          onChange={changeHandler}
          placeholder="Name"
        />
        <input
          required
          name="age"
          type="number"
          onChange={changeHandler}
          placeholder="Age"
        />
        <input
          required
          name="address"
          type="text"
          onChange={changeHandler}
          placeholder="Address"
        />
        <input
          required
          name="department"
          type="text"
          onChange={changeHandler}
          placeholder="department"
        />
        <input
          required
          name="salary"
          type="number"
          onChange={changeHandler}
          placeholder="salary"
        />
        <label>married ?</label>
        <input
          required
          className="MRD"
          name="married"
          type="checkbox"
          onChange={changeHandler}
        />
        <button type="submit" onClick={appendUserData}>
          submit and save
        </button>
      </form>
    </div>
  );
};

export default Form;