import './App.css';
import AS from "axios"
import Form from './components/Form.jsx'
import React, { useState, useEffect } from 'react';
import Table from './components/Table.jsx'
import Top from './components/Top.jsx'

function App() {
  const [data, setData] = useState({});
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    AS
      .get(`http://localhost:8080/data`)
      .then(r => {
        setUserData(r.data);
        //console.log(r);
      })
  }, [setData])

  return (
    <>
      <Top></Top>
      <div className="container">
        <div>
          <Form data={data} setData={setData} setUserData={setUserData} userData={userData}></Form>
        </div>
        <div>
          <Table userData={userData}></Table>
        </div>
      </div>
    </>
  );
}

export default App;