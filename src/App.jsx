import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Domain from "./components/Domain";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Domain />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
