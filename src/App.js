import "./App.css";
import Employee from "./Components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You can't view the Employees</p>
      )}
    </div>
  );
}

export default App;
