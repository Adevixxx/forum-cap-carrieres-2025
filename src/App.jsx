
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import Navbar from "./components/NavBar";
import PolesShowcase from "./sections/PolesShowcase";
import SchoolPresentation from "./sections/SchoolPresentation";
import TeamSlider from "./sections/TeamSlider";
import DaySchedule from "./sections/DaySchedule";
import ForumPresentation from "./sections/ForumPresentation";

const App = () => (
  <>
    
      <Navbar />
      <Hero />
    <SchoolPresentation />
    <ShowcaseSection />
    <ForumPresentation />
    <LogoShowcase />
    <PolesShowcase />
    <TeamSlider />
    <DaySchedule />
    <Contact />
    <Footer />
  </>
);

export default App;
