import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
