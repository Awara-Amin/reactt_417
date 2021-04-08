import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2019, 11, 1, 19).getHours();
console.log(currentTime);

// function renderConditionally() {
// if (isLoggedIn) KAKA, you could have said like that too becuase isLoggedIn bullean, but any way to make it easy was like that below
// if (isLoggedIn === true) {
//   return <h1>Hello</h1>;
// } else {
//   return <Login />;
// return (
//   <form className="form">
//     <input type="text" placeholder="Username" />
//     <input type="password" placeholder="Password" />
//     <button type="submit">Login</button>
//   </form>
// );
// }
// }

function App() {
  return (
    <div className="container">
      {/* // calling the function here */}
      {/* see reactt-417 */}
      {/* {renderConditionally()} */}
      {/* changing to Ternery Opertar to be like an expression NOT STATEMENT */}
      {/* {isLoggedIn === true ? <h1>Hello</h1> : <Login />} */}
      {/* {currentTime < 12 ? <h1>Why are you still working?</h1> : null} */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
      {/* <h1>Hello</h1> */}
      {/* <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
  </form> */}
    </div>
  );
}

export default App;
