import { useState } from "react";

function CalculateBMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [bmi, setBMI] = useState(null);

  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const [valueWeigth, setValueWeigth] = useState("kg");

  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);

  function calculateBMIKgCm() {
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / heightInMeters ** 2).toFixed(1);
      setBMI(calculatedBMI);
    } else {
      setBMI(null);
    }
  }

  function calculateBMILbsFeet() {
    if (weight && feet && inches) {
      const heightInches = feet * 12 + parseInt(inches);
      const calculatedBMILbsFeet = (703 * (weight / heightInches ** 2)).toFixed(
        1
      );
      setBMI(calculatedBMILbsFeet);
    } else {
      setBMI(null);
    }
  }

  function handleMetric(e) {
    e.preventDefault();
    setValueWeigth("kg");
    setMetric(true);
    setImperial(false);
    setWeight("");
    setHeight("");
    setBMI("");
  }

  function handleImperial(e) {
    e.preventDefault();
    setValueWeigth("lbs");
    setImperial(true);
    setMetric(false);
    setWeight("");
    setHeight("");
    setBMI("");
  }

  return (
    <form>
      <button onClick={handleMetric}>Kg and Metric</button>

      <button onClick={handleImperial}>Lbs and Imperial</button>

      {/* metric and kg */}
      <p>Your Weight</p>
      <input
        type="text"
        placeholder={`Your weight in ${valueWeigth}`}
        value={weight}
        onChange={e => setWeight(e.target.value)}
      />

      <p>Your Height</p>

      {metric && (
        <input
          type="text"
          placeholder="Your height in cm"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
      )}

      {/* lbs and imperial */}

      {imperial && (
        <>
          <input
            type="text"
            placeholder="Your height in feet"
            value={feet}
            onChange={e => setFeet(e.target.value)}
          />

          <input
            type="text"
            placeholder="Your heigth in inches"
            value={inches}
            onChange={e => setInches(e.target.value)}
          />
        </>
      )}

      {metric ? (
        <button type="button" onClick={calculateBMIKgCm}>
          Calculate BMI
        </button>
      ) : (
        <button type="button" onClick={calculateBMILbsFeet}>
          Calculate BMI
        </button>
      )}

      {/* {imperial && (
        <button type="button" onClick={calculateBMILbsFeet}>
          Calculate BMI
        </button>
      )} */}

      {bmi ? <p>BMI is {bmi}</p> : ""}
    </form>
  );
}

export default CalculateBMI;
