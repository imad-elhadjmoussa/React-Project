import Information from "./Compenents/Information";
import SearchBar from "./Compenents/SearchBar";
import './index.css';
import { useEffect, useState } from 'react';
import useFetch from "./Custom Hooks/useFetch";

function App() {
  //const [data, setData] = useState(null);
  const [input, setInput] = useState(null);
  const [contry, setContry] = useState('London')
  const key = "b92179a783c12a210f9fe31f23247f7b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${contry}&units=Metric&appid=${key}`;
  const { data, err } = useFetch(url, contry);
  //Function to fetch data whene the input is giveen
  const search = () => {
    setContry(input);
  }

  useEffect(() => {

  }, [contry])

  //Function to handle input change
  const getContry = (e) => {
    setInput(e.target.value);
  }

    return (
      <div className="app" >
        <SearchBar search={search} getContry={getContry} />
        <Information
          contry={err? "Unknow Contry" : data && data.name}
          windSpeed={err? "Unknow" :data && data.wind.speed}
          humidity={err? "Unknow" :data && data.main.humidity}
          temp={data && data.main.temp}
        />
      </div>
    );
  }



export default App;
