import React, {  useState } from 'react'
import './Tempapp.css'
import { BsSearch } from 'react-icons/bs';
import reactLogo from './cloud.png'
import humidityIcon from './humidity.png'
import windIcon from './wind.png'
import axios from 'axios'
import clear from './clear.png'
import rain from './rain.png'
import drizzle from './drizzle.png'


const Tempapp = () => {

  const [name,setName]=useState("")
const [data,setData]=useState({
  celcius:10,
  name:'London',
  humidity:10,
  speed:2,
  image:""
})


const handleClick=()=>{
  if(name!==""){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`;
    axios.get(apiUrl)
    .then(res=>{
      let imagePath="";
      if(res.data.weather[0].main=='Clouds'){
        imagePath={reactLogo}
      }else if(res.data.weather[0].main=='Clear'){
        imagePath={clear}
      }else if(res.data.weather[0].main=='Rain'){
        imagePath={rain}
      }else if(res.data.weather[0].main=='Drizzle'){
        imagePath={drizzle}
      }
      console.log(res.data)
      setData({...data,celcius:res.data.main.temp,
      name:res.data.name,humidity:res.data.main.humidity,speed:res.data.wind.speed,image:imagePath})})
    .catch(err=>console.log(err));
  }
}

  return (
    <div className='container'>
      
      <div className='weather'>
       <div className='search'>
<input type='text'className='search input' placeholder='Enter city Name' onChange={e=>setName(e.target.value)}/>
<button className='search button' onClick={handleClick}><BsSearch /></button>
<div className='winfo'>
<img className='icon' src={reactLogo} alt='img'  />
<h1>{Math.round(data.celcius)}°C</h1>
<h2>{data.name}</h2>
<div className='details'>
  <div className='col'>
    <img src={humidityIcon} alt='dummy ig' className='humidity' />
    <div>
      <p className='para'>{Math.round(data.humidity)}%</p>
      <p>Humidity</p>
    </div>
  </div>
<div className='col'>
  <img src={windIcon} alt='wind img' className='windIcon' />
  <div>
    <p className='para'>{Math.round(data.speed)}km/h</p>
    <p>Wind</p>
  </div>
</div>

</div>

</div>
       </div>

      </div>

    </div>
  )
}

export default Tempapp