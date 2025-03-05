import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import GridComponent from "./sections/Portfolio";
import ConatctBanner from "./components/ConatctBanner";
import Testmonial from "./sections/Testmonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="overflow-x-hidden font-sans  bg-slate-100">
      <Hero />
      <ConatctBanner />
      <AboutUs />
      <Services />
      <GridComponent />
      <Testmonial />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
