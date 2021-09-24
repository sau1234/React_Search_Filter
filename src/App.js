import React, { useState } from 'react';
import './App.css';
import JSONDATA from './warehouse.json';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      
      <input type="text" placeholder="searchbar..." 
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      {JSONDATA.filter((val) => {
        if (searchTerm === "") {
          return val;
        }
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.cluster.toLowerCase().includes(searchTerm.toLowerCase()) ||
          val.code.toLowerCase().includes(searchTerm.toLowerCase()) ||  
          val.id.toString().includes(searchTerm.toString())
          ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key} >
            <p>{val.name}</p>
            <p>{val.city}</p>
            <p>{val.id}</p>
            <p>{val.type}</p>
            <p>{val.cluster}</p>
            <p>{val.code}</p>
            <p>{val.space_available}</p>
          </div>
        );
      })}
    </div>

  );
}

export default App;
