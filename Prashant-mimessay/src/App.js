import "./App.css";
import Verifywindow from "./Component/Verifywindow";

function App() {
  function verify() {
    var btn = document.querySelector(".popup-btn");
    var popup = document.querySelector(".popup-container");

    btn.style.display = "none";
    popup.style.display = "flex";
  }

  return (
    <>
      <Verifywindow />
      <div className="container">
        <button onClick={verify} className="popup-btn">
          Verify Phone number
        </button>
      </div>
    </>
  );
}

export default App;
