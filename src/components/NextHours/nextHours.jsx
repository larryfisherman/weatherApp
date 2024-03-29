import React from "react";
import { useSelector } from "react-redux";
import "./nextHours.css";
import { Icons } from "../../icons";
import moment from "moment";

const NextHours = ({ nextHours }) => {
  const isApiLoaded = useSelector((state) => state.weather.isApiLoaded);
  const data = useSelector((state) => state.weather.fiveDaysWeatherData);
  if (isApiLoaded) {
    const threeHoursTemp = Math.floor(
      Math.round(data.list[0].main.temp) - 273.15
    );
    const threeHoursSky = data.list[0].weather[0].main;
    const sixHoursTemp = Math.floor(
      Math.round(data.list[3].main.temp) - 273.15
    );
    const sixHoursSky = data.list[1].weather[0].main;
    const nineHoursTemp = Math.floor(
      Math.round(data.list[2].main.temp) - 273.15
    );
    const nineHoursSky = data.list[6].weather[0].main;
    return (
      <div className="nextHours">
        <div className="one">
          <img src={Icons[threeHoursSky]} alt={Icons[threeHoursSky]} />
          <span>{threeHoursTemp} °C</span>
          <span>{moment().add(3, "hours").calendar()}</span>
        </div>
        <div className="two">
          <img src={Icons[sixHoursSky]} alt={Icons[sixHoursSky]} />
          <span>{sixHoursTemp} °C</span>
          <span>{moment().add(6, "hours").calendar()}</span>
        </div>
        <div className="three">
          <img src={Icons[nineHoursSky]} alt={Icons[nineHoursSky]} />
          <span>{nineHoursTemp} °C</span>
          <span>{moment().add(9, "hours").calendar()}</span>
        </div>
        <div className="four">
          <img src={Icons[nineHoursSky]} alt={Icons[sixHoursSky]} />
          <span>{nineHoursTemp} °C</span>
          <span>{moment().add(12, "hours").calendar()}</span>
        </div>
        <div className="five">
          <img src={Icons[nineHoursSky]} alt={Icons[sixHoursSky]} />
          <span>{nineHoursTemp} °C</span>
          <span>{moment().add(15, "hours").calendar()}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default NextHours;
