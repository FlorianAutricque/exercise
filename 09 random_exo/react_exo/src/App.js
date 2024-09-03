import { useEffect, useState } from "react";
//////////// MAX COUNT /////////////////////////////////

function App() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Number of clicks before times end</h2>

      <h3>{count}</h3>

      <p>Time left: {timer}</p>
      {timer === 0 ? "" : <button onClick={handleCount}>+</button>}
    </div>
  );
}

export default App;

////////////////STOPWATCH/TIMER ///////////////////////
// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => setTime(time + 1));
//     }
//     return () => clearInterval(interval);
//   }, [time, isRunning]);

//   const hours = Math.floor(time / 360000);
//   const minutes = Math.floor((time % 360000) / 6000);
//   const seconds = Math.floor((time % 6000) / 100);

//   const start = () => {
//     setIsRunning(true);
//   };

//   const stop = () => {
//     setIsRunning(false);
//   };

//   const reset = () => {
//     setTime(0);
//   };

//   return (
//     <div>

//       <h2>Timer</h2>

//       <p>
//         {hours}:{minutes.toString().padStart(2, "0")}:
//         {seconds.toString().padStart(2, "0")}
//       </p>

//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default App;

/////////////SHOW HIDE TEXT ////////////////////////////////////
// function App() {
//   const [show, setShow] = useState(false);

//   const handleShow = () => {
//     setShow(!show);
//   };
//   return (
//     <div>
//       <button onClick={handleShow}>{show ? "Hide" : "Show"}</button>

//       {show && <h3>Welcome</h3>}
//     </div>
//   );
// }

// export default App;

/////////////////////DATA FORM SUBMISSION ///////////////////////////
// function App() {
//   const data = {
//     username: "",
//     fullname: "",
//     age: "",
//   };

//   const [show, setShow] = useState(false);
//   const [values, setValues] = useState(data);

//   const handleShowData = e => {
//     e.preventDefault();
//     setShow(true);
//   };

//   const handleChangeInputData = e => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <form>
//         <p>USERNAME:</p>
//         <input
//           type="text"
//           placeholder="Username"
//           value={values.username}
//           name="username"
//           onChange={handleChangeInputData}
//         />

//         <p>FULLNAME:</p>
//         <input
//           type="text"
//           placeholder="Fullname"
//           value={values.fullname}
//           name="fullname"
//           onChange={handleChangeInputData}
//         />

//         <p>AGE:</p>
//         <input
//           type="number"
//           placeholder="Age"
//           value={values.age}
//           name="age"
//           onChange={handleChangeInputData}
//         />

//         <button onClick={handleShowData}>Submit</button>
//       </form>

//       {show && (
//         <div>
//           <h3>Request Sent to DB with below request data:</h3>
//           <ul>
//             <li>Username: {values.username}</li>
//             <li>Fullname: {values.fullname}</li>
//             <li>Age: {values.age}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

////////////////////////TODO LIST REACT /////////////////////////////

// import { useState } from "react";

// function App() {
//   const [items, setItems] = useState("");
//   const [allItems, setAllItems] = useState([]);

//   const handleAddItem = e => {
//     setItems(e.target.value);
//   };

//   const addNewItem = () => {
//     const newItem = { id: Date.now(), name: items };
//     const updatedListItems = [...allItems, newItem];
//     setAllItems(updatedListItems);
//   };

//   const deleteItem = itemId => {
//     const updatedListAfterDelete = allItems.filter(item => item.id !== itemId);
//     setAllItems(updatedListAfterDelete);
//   };

//   return (
//     <div>
//       <h3>Todo list</h3>

//       <input type="text" value={items} onChange={handleAddItem} />
//       <button onClick={addNewItem}>Add</button>

//       <ul>
//         {allItems.map(item => (
//           <li key={item.id}>
//             <p>{item.name}</p>
//             <button onClick={() => deleteItem(item.id)}> X</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
