import Hero from "./components/Hero";
import Technology from "./components/Technology";
import About from "./components/About";

import "./App.css";
import Projects from "./components/Projects";
import Contact from "./components//Contact";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <>
    <div className="overflow-x-hidden text-neutral-900  selection:bg-cyan-300 selection:text-cyan-900 scroll-smooth">

      <div className="container  mx-auto px-8">
        <Navbar2 />

        {/* <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes> */}

        <Hero />
        <About />
        <Technology />
        <Projects />
        <Contact/>
        

      </div>
      </div>
      </>
  );
}

export default App;
