import "./App.css";
import Employee from "./Components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Michael" role="intern" />
          <Employee name="Abby" role={role} />
          <Employee name="John" />
        </>
      ) : (
        <p>You can't view the Employees</p>
      )}
    </div>
  );
}

export default App;
