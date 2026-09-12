import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="noise" />

      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Resume />
      </main>

      <Footer />
    </div>
  );
}

export default App;