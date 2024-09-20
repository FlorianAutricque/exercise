// import { useEffect, useState } from "react";

import React, { useState, useContext, useRef } from "react";

const ThemeContext = React.createContext("dark");

function Comp1() {
  const { theme, h1 } = useContext(ThemeContext);

  return (
    <div>
      <h1 ref={h1}>Current Theme: {theme}</h1>
    </div>
  );
}

function Comp2() {
  const { setTheme } = useContext(ThemeContext);
  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  const h1 = useRef();

  if (theme === "light") {
    document.body.style.backgroundColor = "white";
    h1.current.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    h1.current.style.color = "white";
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, h1 }} className="App">
      <Comp1 />
      <Comp2 />
    </ThemeContext.Provider>
  );
}

////////////fetch////////////
// function useFetch(url) {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(url);
//         if (!res.ok) {
//           throw new Error("error");
//         }

//         const data = await res.json();
//         setData(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { loading, data, error };
// }

// export default function App() {
//   const postIds = [1, 2, 3, 4, 5, 6, 7, 8];
//   const [index, setIndex] = useState(0);

//   const {
//     loading,
//     data: post,
//     error,
//   } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postIds[index]}`);

//   const incrementIndex = () => {
//     setIndex(i => (i === postIds.length - 1 ? i : i + 1));
//   };

//   if (loading === true) {
//     return <p>Loading</p>;
//   }

//   if (error) {
//     return (
//       <>
//         <p>{error}</p>
//         <button onClick={incrementIndex}>Next Post</button>
//       </>
//     );
//   }

//   return (
//     <div className="App">
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       {error && <p>{error}</p>}
//       {index === postIds.length - 1 ? (
//         <p>No more posts existss ....</p>
//       ) : (
//         <button onClick={incrementIndex}>Next Post</button>
//       )}
//     </div>
//   );
// }

///////timer//////////////
// function App() {
//   const [time, setTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let intervalId;
//     if (isRunning) {
//       intervalId = setInterval(() => setTime(time + 1), 10);
//     }

//     return () => clearInterval(intervalId);
//   }, [time, isRunning]);

//   const minutes = Math.floor((time % 360000) / 6000);
//   const seconds = Math.floor((time % 6000) / 100);
//   const milliseconds = time % 100;

//   const startTimer = () => {
//     setIsRunning(true);
//   };

//   const stopTimer = () => {
//     setIsRunning(false);
//   };

//   const resetTimer = () => {
//     setIsRunning(false);
//     setTime(0);
//   };

//   return (
//     <div>
//       <h1>Timer</h1>

//       <span>
//         {minutes.toString().padStart(2, "0")} mins{" "}
//         {seconds.toString().padStart(2, "0")} secs{" "}
//         {milliseconds.toString().padStart(2, "0")} ms
//       </span>
//       <br />
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// }

// export default App;

///count max ////
// function App() {
//   const [count, setCount] = useState(0);
//   const [time, setTime] = useState(3);

//   useEffect(() => {
//     const timeLeft = setInterval(() => {
//       setTime(prevTime => {
//         if (prevTime === 0) {
//           clearInterval(time);
//           return 0;
//         } else {
//           return prevTime - 1;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timeLeft);
//   }, [time]);

//   return (
//     <div>
//       <h2>No of clicks until timer expires</h2>
//       <div>
//         {count}

//         <p>Time left: {time} seconds</p>
//         {time === 0 ? (
//           ""
//         ) : (
//           <button onClick={() => setCount(count + 1)}>+</button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

//////////// MAX COUNT /////////////////////////////////

// function App() {
//   const [count, setCount] = useState(0);
//   const [timer, setTimer] = useState(10);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimer(prevTimer => {
//         if (prevTimer <= 0) {
//           clearInterval(interval);
//           return 0;
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>Number of clicks before times end:</h2>

//       <h3>{count}</h3>

//       <p>Time left: {timer}</p>
//       {timer === 0 ? "" : <button onClick={handleCount}>+</button>}
//     </div>
//   );
// }

// export default App;

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
//   const [item, setItem] = useState("");
//   const [allItems, setAllItems] = useState([]);

//   const handleAddItem = e => {
//     setItem(e.target.value);
//   };

//   const addNewItem = () => {
//     const newItem = { id: Date.now(), name: item };
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

//       <input type="text" value={item} onChange={handleAddItem} />
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
