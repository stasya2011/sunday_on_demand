import SummaryForm from "./pages/summary/SummaryForm";
import Options from "./pages/entry/Options";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SummaryForm />
      <Options optionType="scoops" />
    </div>
  );
}

export default App;
