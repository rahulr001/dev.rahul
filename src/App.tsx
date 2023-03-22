import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./Components";
import BgParticals from "./Components/canvas/BgParticals";

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <BgParticals />

        <Navbar />
        <Hero />

        <About />
        <Experience />
        <Tech />
        <Works />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
}

export default App;
