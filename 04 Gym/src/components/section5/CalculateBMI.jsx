import { useState } from "react";

function CalculateBMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);

  function calculateBMI() {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / heightInMeters ** 2).toFixed(1);
      setBMI(calculatedBMI);
    } else {
      setBMI(null);
    }
  }

  return (
    <form>
      <input
        type="number"
        placeholder="Your weight in kg"
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Your height in cm"
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <button type="button" onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi !== null && <p>BMI is {bmi}</p>}
    </form>
  );
}

export default CalculateBMI;
