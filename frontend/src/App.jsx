import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import GridComponent from "./sections/Portfolio";

function App() {
  return (
    <main className="overflow-x-hidden font-sans">
      <Hero />
      <AboutUs />
      <Services />
      <GridComponent />
    </main>
  );
}

export default App;
