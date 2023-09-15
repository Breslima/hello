import "./App.css";
import Employee from "./Components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <Employee name="Michael" role="intern" />
          <Employee name="Abby" />
          <Employee name="John" />
        </>
      ) : (
        <p>You can't view the Employees</p>
      )}
    </div>
  );
}

export default App;
