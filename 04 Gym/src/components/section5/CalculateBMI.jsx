import { useEffect, useState } from "react";
import TitleNumber from "../TitleNumber.jsx";

import styles from "./CalculateBMI.module.css";

function CalculateBMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [valueWeigth, setValueWeigth] = useState("kg");
  const [metric, setMetric] = useState(true);
  const [imperial, setImperial] = useState(false);
  const [analyzebmi, setAnalyzebmi] = useState("");

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

  useEffect(() => {
    if (bmi < 18.5) {
      setAnalyzebmi("underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setAnalyzebmi("normal");
    } else if (bmi >= 25 && bmi < 30) {
      setAnalyzebmi("overweight");
    } else {
      setAnalyzebmi("obese");
    }
  }, [bmi]);

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
    <div className={styles.mainContainerBMI}>
      <TitleNumber
        title={"ADVANCED CALCULATOR"}
        message={"Calculate Your BMI"}
        number={"05"}
      />

      <div className={styles.horizontalLine}></div>

      <form className={styles.containerBMI}>
        <div className={styles.btnSelection}>
          <button onClick={handleMetric} className={styles.btn}>
            Kg and Metric
          </button>

          <button onClick={handleImperial} className={styles.btn}>
            Lbs and Imperial
          </button>
        </div>

        <div className={styles.containerInputBtn}>
          <div>
            <p>Your Weight:</p>
            <input
              type="text"
              placeholder={`Your weight in ${valueWeigth}`}
              value={weight}
              onChange={e => setWeight(e.target.value)}
            />

            <p>Your Height:</p>

            {metric && (
              <input
                type="text"
                placeholder="Your height in cm"
                value={height}
                onChange={e => setHeight(e.target.value)}
              />
            )}

            {imperial && (
              <div>
                <input
                  type="text"
                  placeholder="Your height in feet"
                  value={feet}
                  onChange={e => setFeet(e.target.value)}
                  className={styles.imperialInput}
                />

                <input
                  type="text"
                  placeholder="Your heigth in inches"
                  value={inches}
                  onChange={e => setInches(e.target.value)}
                />
              </div>
            )}
          </div>

          <div>
            {metric ? (
              <button
                className={styles.btnCalcul}
                type="button"
                onClick={calculateBMIKgCm}
              >
                Calculate BMI
              </button>
            ) : (
              <button
                className={styles.btnCalcul}
                type="button"
                onClick={calculateBMILbsFeet}
              >
                Calculate BMI
              </button>
            )}
          </div>
        </div>

        {bmi ? (
          <p>
            BMI is <span className={styles.BMIresults}>{bmi}</span> which mean
            that you are <span className={styles.BMIresults}>{analyzebmi}</span>
          </p>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default CalculateBMI;
