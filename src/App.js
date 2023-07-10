import "./App.css";

import React, { useState } from "react";
import Table from "./Table";

function App() {
  const [userData, setUserData] = useState([]);
  const [tableHeaders, setTableHeaders] = useState([]);
  React.useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setTableHeaders(Object.keys(res.data[0]));
      });
  }, []);
  return (
    <div className="app-container">
      <Table tableData={userData} tableHeaders={tableHeaders} />
    </div>
  );
}

export default App;
