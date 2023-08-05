import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <button onClick={notify}></button>
      <ToastContainer />
    </div>
  );
}

export default App;
