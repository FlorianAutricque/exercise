import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiDaySunnyOvercast,
  WiFog,
  WiSnow,
  WiSleet,
  WiHail,
  WiDayCloudy,
  WiNightClear,
  WiNightPartlyCloudy,
  WiDayRain,
  WiNightRain,
  WiDayShowers,
} from "react-icons/wi";

function GetWeatherIcon(wmoCode, size) {
  const icons = new Map([
    [[0], <WiDaySunny size={size} color="#ffffff" key="sunny" />],
    [[1, 2], <WiDaySunnyOvercast size={size} color="#ffffff" key="suncloud" />],
    [[3], <WiCloud size={size} color="#ffffff" key="cloud" />],
    [[4, 5, 6], <WiCloud size={size} color="#ffffff" key="newCloudIcon" />],
    [[7, 8], <WiFog size={size} color="#ffffff" key="fogIcon" />],
    [
      [9, 10, 11, 12, 13],
      <WiSnow size={size} color="#ffffff" key="snowIcon" />,
    ],
    [
      [14, 15, 16, 17, 18, 41, 42, 43],
      <WiSleet size={size} color="#ffffff" key="sleetIcon" />,
    ],
    [
      [19, 23, 24, 25, 26],
      <WiHail size={size} color="#ffffff" key="hailIcon" />,
    ],
    [[20, 21, 22], <WiFog size={size} color="#ffffff" key="fogIcon" />],
    [
      [27, 28, 29, 30, 44],
      <WiDayCloudy size={size} color="#ffffff" key="daycloudy" />,
    ],
    [
      [31, 32, 33, 34],
      <WiNightClear size={size} color="#ffffff" key="nightclear" />,
    ],
    [
      [35, 46, 47],
      <WiNightPartlyCloudy
        size={size}
        color="#ffffff"
        key="nightpartlycloudy"
      />,
    ],
    [[36], <WiDayRain size={size} color="#ffffff" key="dayrain" />],
    [[37], <WiNightRain size={size} color="#ffffff" key="nightrain" />],
    [
      [38, 39, 40, 50, 59, 60],
      <WiDayShowers size={size} color="#ffffff" key="dayshowers" />,
    ],
    [[45], <WiDayShowers size={size} color="#ffffff" key="dayshowers" />],
    [
      [48, 51, 56, 61, 66, 80],
      <WiCloud size={size} color="#ffffff" key="clorainunny" />,
    ],
    [
      [53, 55, 63, 65, 57, 67, 81, 82],
      <WiRain size={size} color="#ffffff" key="rain" />,
    ],
    [
      [71, 73, 75, 77, 85, 86],
      <WiRain size={size} color="#ffffff" key="rain" />,
    ],
    [[95, 96, 99], <WiThunderstorm size={size} color="#ffffff" key="storm" />],
  ]);

  const arr = [...icons.keys()].find(key => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";

  return icons.get(arr);
}

export default GetWeatherIcon;
