import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './WeatherApp.css'



/*
OBJECTIVES (What do we need?)
- input box which will take values from the user i.e. cities. These values should then result in getting info from API
- In order for the inputValue to be updated based on what is inputted in the input box, we need
  a useState hook 
- If input in box is invalid, send request for defaultUrl (weather in Manchester)
*/

function App() {

  const defaultUrl = `https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=${process.env.REACT_APP_SECRET}&units=metric`
  const [newData, setNewData] = useState({fetchData})

function fetchData (inputValue){
  if (inputValue){//if inputValue is true
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${process.env.REACT_APP_SECRET}&units=metric`)
    .then((response) =>{
      setNewData(response.data)
    }).catch((err)=>{
      if (err.response.status === 404){
        alert ("invalid city")
      }
    })
  }else{
        axios.get(defaultUrl).then((response) =>{
          setNewData(response.data)
        })
      }
    }

  useEffect(() =>{
    fetchData()
  }, [])/* We have to put the [] here to destructure it into an empty array so it only does one API call at a time, 
  or so it doesn't keep repeating a call */

  function handleInput(e){//e stands for the event that will be passed in through the input box
    if (e.key === "Enter"){ 
      fetchData(e.target.value)
    
  }
}

  return (
    <div id = "main">
      <div id = "input">
        <input className= 'my-input'
          placeholder = "Enter City"
          onKeyDown = {handleInput}
        /> </div>      

     <div id = "main1">
          <div id = "city-name">{ newData ? <h3>{newData.name}</h3> : <h3></h3>}</div>
          <div id = "country-name">{ newData.sys ? <h3>{newData.sys.country}</h3> : <h3></h3>}</div>
          <div id = "temp-icon">
          <div id = "temp">{ newData.main ? <h1>{Math.floor(newData.main.temp)}°C</h1> : <h1></h1>}</div>
          <div id = "icon">{ newData.weather ? <img src ={`https://openweathermap.org/img/wn/${newData.weather[0].icon}@2x.png`}/> : null}</div>
          </div>
          <div id = "description">{ newData.weather ? <h3> {newData.weather[0].description}</h3> : <h3></h3>}</div>
          {/* <div id = "icon">{ newData.weather ? <img src ={`https://openweathermap.org/img/wn/${newData.weather[0].icon}@2x.png`}/> : null}</div> */}
      </div>
        <div id = "extra-info">
           { newData.main ? <h3>Feels Like: {Math.floor(newData.main.feels_like)}°C</h3> : <h3></h3>}
           { newData.main ? <h3>Min Temp: {Math.floor(newData.main.temp_min)}°C</h3> : <h3></h3>}
           { newData.main ? <h3>Max Temp: {Math.floor(newData.main.temp_max)}°C</h3> : <h3></h3>}
           {/* { newData.main ? <h3>Humidity: {newData.main.humidity}%</h3> : <h3></h3>} */}
           {/* { newData.weather ? <h3> {newData.weather[0].main}</h3> : <h3></h3>} */}
        </div>
     
    
    </div>

  )
}

export default App
