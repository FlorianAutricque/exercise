import { useState } from "react";

function App() {
  const [date, setDate] = useState(new Date("01/01/1990"));

  const currentDate = new Date();

  const diff = currentDate - date;

  const y = diff / (365 * 24 * 60 * 60 * 1000);

  const diff2 = y - Number.parseInt(y);
  const m = diff2 * 12;
  console.log(m);

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={e => setDate(new Date(e.target.value))}
      />

      <p>
        {Number.parseInt(y)} - {Number.parseInt(m)}
      </p>
    </div>
  );
}

export default App;
