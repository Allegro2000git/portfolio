import "./App.css";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/about/About";
import { Main } from "./layout/sections/main/Main";
import { Service } from "./layout/sections/service/Service";
import { Works } from "./layout/sections/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Service />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
