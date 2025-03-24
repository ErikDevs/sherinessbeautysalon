import "./index.css";
import AboutUs from "./sections/About";
import Services from "./sections/Services";
import Hero from "./sections/Hero";
import GridComponent from "./sections/Portfolio";
import Testmonial from "./sections/Testmonial";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./components/Header.jsx";
import FAQs from "./sections/FAQs.jsx";
import ConatctBanner from "./components/ConatctBanner";

function App() {
  return (
    <main className="mx-auto w-full font-sans text-white">
      <Header />
      <Hero />
      <ConatctBanner />
      <AboutUs />
      <Services />
      <GridComponent />
      <Testmonial />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
