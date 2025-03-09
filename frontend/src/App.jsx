import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import GridComponent from "./sections/Portfolio";

import Testmonial from "./sections/Testmonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden px-2 md:px-0 mx-auto font-sans max-w-7xl">
        <Hero />
        <AboutUs />
        <Services />
        <GridComponent />
        <Testmonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
