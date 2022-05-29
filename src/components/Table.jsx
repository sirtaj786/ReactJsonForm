import React from "react";
import style from "./Table.module.css";

const Table = ({ userData }) => {
  console.log(userData);

  // name: "",
  // age: "",
  // address: "",
  // department: "",
  // salary: "",
  // married: false,

  return (
    <div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>ADDRESS</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
            <th>MARRIED</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((x, i) => (
            <tr key={i}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.address}</td>
              <td>{x.department}</td>
              <td>{x.salary}</td>
              <td>{x.married ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;