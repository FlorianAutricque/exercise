import { useState } from "react";

function CalculateBMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unitWeight, setUnitWeight] = useState("kg");
  const [unitHeight, setUnitHeight] = useState("cm");
  const [bmi, setBMI] = useState(null);

  function calculateBMI() {
    if (unitWeight === "kg" && unitHeight === "cm" && weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / heightInMeters ** 2).toFixed(1);
      setBMI(calculatedBMI);
    } else if (
      unitWeight === "lbs" &&
      unitHeight === "feet" &&
      weight &&
      height
    ) {
      const calculatedBMI = ((703 * weight) / height ** 2).toFixed(1);
      setBMI(calculatedBMI);
    } else {
      setBMI(null);
    }
  }

  return (
    <form>
      <p>Your Weight</p>
      <input
        type="number"
        placeholder={`Your weight in ${unitWeight}`}
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />
      <select value={unitWeight} onChange={e => setUnitWeight(e.target.value)}>
        <option value="kg">kg</option>
        <option value="lbs">lbs</option>
      </select>

      <p>Your Height</p>
      <input
        type="number"
        placeholder={`Your height in ${unitHeight}`}
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <select value={unitHeight} onChange={e => setUnitHeight(e.target.value)}>
        <option value="cm">cm</option>
        <option value="feet">feet</option>
      </select>

      <button type="button" onClick={calculateBMI}>
        Calculate BMI
      </button>

      {bmi !== null && <p>BMI is {bmi}</p>}
    </form>
  );
}

export default CalculateBMI;
