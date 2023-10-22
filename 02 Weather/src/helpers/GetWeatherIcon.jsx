import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiThunderstorm,
  WiDaySunnyOvercast,
} from "react-icons/wi";

function GetWeatherIcon(wmoCode, size) {
  const icons = new Map([
    [[0], <WiDaySunny size={size} color="#ffffff" key="sunny" />],
    [[1, 2], <WiDaySunnyOvercast size={size} color="#ffffff" key="suncloud" />],
    [[3], <WiCloud size={size} color="#ffffff" key="cloud" />],
    [
      [45, 48, 51, 56, 61, 66, 80],
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
