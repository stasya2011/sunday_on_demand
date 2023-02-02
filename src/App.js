import SummaryForm from "./pages/summary/SummaryForm";
import OrderEntry from "./pages/entry/OrderEntry";
import "./App.css";

function App() {
  return (
    <div className="App">
      <OrderEntry />
      <SummaryForm />
    </div>
  );
}

export default App;
