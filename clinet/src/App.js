import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [quo, setQuo] = useState("");

  // const displayinfo=() =>{
  //   console.log(name,age,quo)
  // }
  const [QuoList,setQuoList] = useState([])

  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 600
        }}
    />
);

  const addquo = () => {
    Axios.post("/create", {
      name: name,
      age: age,
      quote: quo,
    }).then(()=>{
      console.log("success!");
    })
  };

  const getquo = () => {
    Axios.get("/quote").then((response)=>{
      console.log(response);
      setQuoList(response.data);

    })
  };

  return (
    <div className="App">

      <div className="imagecontainer">
    <img src= "data:image/jpeg;base64,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" alt="logo"/>
    </div>
      <div className="info">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />

        <label>Quote:</label>
        <input
          type="text"
          onChange={(event) => {
            setQuo(event.target.value);
          }}
        />
        <button onClick={addquo}>Add Quote</button>
      </div>
      <ColoredLine color="red" />
      <div className="quo">
        <button onClick={getquo}> Show All</button>
        {QuoList.map( (val,key) => {
          return <div className="getq"> 
          <h3>{val.name}</h3>
          <h4>{val.quot}</h4>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
