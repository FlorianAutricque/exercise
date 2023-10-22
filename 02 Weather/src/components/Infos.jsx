import { useEffect, useState } from "react";
import FormatDay2 from "../helpers/FormatDay2";
import styles from "./Infos.module.css";

function Infos({ weather }) {
  if (!weather || !weather.time || !weather.time[0]) {
    return null;
  }

  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    function updateLocalTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;

      const timeString = `${formattedHours}:${String(minutes).padStart(
        2,
        "0"
      )} ${ampm}`;
      setLocalTime(timeString);
    }

    updateLocalTime();
    const interval = setInterval(updateLocalTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.infos}>
        <p>{localTime}</p>
        <span>{FormatDay2(weather.time[0]).toUpperCase()}</span>
      </div>
    </>
  );
}

export default Infos;
