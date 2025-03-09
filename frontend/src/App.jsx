import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import GridComponent from "./sections/Portfolio";
import ConatctBanner from "./components/ConatctBanner";
import Testmonial from "./sections/Testmonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./components/Header.jsx";

function App() {
  return (
    <>
      <main className="overflow-x-hidden px-6 md:px-0 mx-auto font-sans max-w-7xl">
        <Header />
        <Hero />
        <ConatctBanner />
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
