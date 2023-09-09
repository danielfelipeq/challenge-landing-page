import darkLogo from "./assets/logo-dark.svg";
import lightLogo from "./assets/logo-light.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div class="main-wrapper">
        <header class="header">
          <img class="logo" src={darkLogo} alt="logo" />
          <Button typeButton={"header-button"} />
        </header>
      </div>
      <footer class="footer">
        <div class="footer-wrapper">
          <img class="logo" src={lightLogo} alt="logo" />
          <Button typeButton={"footer-button"} />
        </div>
      </footer>
    </div>
  );
}

export default App;
