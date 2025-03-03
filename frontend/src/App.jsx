import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import GridGallery from "./sections/Portfolio";

import Hero from "./sections/Hero";

function App() {
  return (
    <main className="overflow-x-hidden font-sans">
      <Hero />
      <AboutUs />
      <Services />
      <GridGallery />
    </main>
  );
}

export default App;
