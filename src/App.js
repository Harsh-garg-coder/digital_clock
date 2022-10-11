import Clock from "./components/clock/Clock";
import style from "./app.module.css";

function App() {
  

  return (
    <div className = {style.app}>
        <div className = {style["app-container"]}>
          <Clock />
        </div>
    </div>
  );
}

export default App;
