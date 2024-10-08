import { useState } from "react";

function App() {
  // faire un input ou mettre la dob - done
  // faire un calcul pour voir de combien je suis vieux

  //date dans js = nbre, nbre de ms entre une date et une autre date.

  const [date, setDate] = useState(new Date("01/01/1999"));

  const todayDate = new Date();

  const diff = todayDate - date;

  const y = diff / (24 * 3600 * 1000 * 365);

  const diff2 = y - Number.parseInt(y);
  const m = diff2 * 12;

  const diff3 = m - Number.parseInt(m);
  const d = diff3 * 30;

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={e => setDate(new Date(e.target.value))}
      />

      <div>
        <h3>
          Your age is: {Number.parseInt(y)} year - {Number.parseInt(m)} months -{" "}
          {Number.parseInt(d)} days
        </h3>
      </div>
    </div>
  );
}

export default App;
