import React, { useEffect, useRef, useState } from "react";
import search1 from "../../assets/search.png";
import cloudy from "../../assets/cloudy.png";
import humid from "../../assets/humid.png";
import wind from "../../assets/windy.png";
import bgDark from "../../../public/back.avif";
import bgLight from "../../../public/light1.webp";
import jiyaBg from '../../../public/jiya.jpg'
function Home({dark}) {
const [data,setData]=useState(false);
    const search = async (city) => {
      try {
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData({
            humidity:data.main.humidity,
            windSpeed:data.wind.speed,
            temperature:Math.floor(data.main.temp),
            location:data.name,
            


        })
      } catch (error) {
        console.log(error);
      }
    };
const input=useRef();

  useEffect(() => {
    search("London");
    console.log("ddb")
  }, []);

  return (
    <div className="flex flex-col h-full items-center  mt-10 md:mt-30 mr-5 ml-5 ">
<div
  className="flex flex-col object-fit p-2 bg-slate-500 bg-cover bg-center rounded-2xl md:w-lg md:p-10"
  style={{ backgroundImage: dark ? `url(${jiyaBg})` : `url(${bgLight})` }}
>
        <div className="flex flex-row  gap-3">
          <input ref={input}
            className="text-2xl  bg-white text-black placeholder:text-black dark:text-white md:placeholder:text-center p-4 w-full rounded-2xl placeholder:text-center dark:placeholder:text-white placeholder:font-medium placeholder:text-xl dark:bg-slate-800"
            placeholder="Search"
          ></input>
          <img onClick={()=>search(input.current.value) } className="w-10 h-10 mt-2" src={search1}></img>
        </div>
        <div className="flex text-white flex-col items-center justify-center">
          <img className="object-fit h-30 mt-30" src={cloudy}></img>
          <h1 className=" text-6xl mt-10 ">{data.temperature}C</h1>
          <h3 className="text-4xl mt-5">{data.location}</h3>
        </div>
        <div className="flex flex-col justify-between mt-10 ">
          <div className="flex text-white gap-2">
            <img className="object-fit h-15" src={humid}></img>
            <div className="flex flex-col">
              <p className="text-xl">{data.humidity}</p>
              <p className="text-xl">Humidity</p>
            </div>
          </div>
          <div className="flex text-white gap-2">
            <img className="object-fit h-15" src={wind}></img>
            <div className="flex flex-col">
              <p className="text-xl">{data.windSpeed} km/hr</p>
              <p className="text-xl">Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
