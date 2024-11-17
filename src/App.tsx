import "./App.css";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Main } from "./layout/sections/main/Main";
import { Service } from "./layout/sections/service/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Service />
    </div>
  );
}

export default App;
