import { useState } from "react";

function CalculateBMI() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / heightInMeters ** 2).toFixed(1);
      return bmi;
    }
    return null;
  };

  const bmi = calculateBMI();

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

      {bmi && <p>BMI is {bmi}</p>}
    </form>
  );
}

export default CalculateBMI;
