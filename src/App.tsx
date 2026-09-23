import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WaveDivider } from "./components/WaveDivider";
import { Problems } from "./components/Problems";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Blogs } from "./components/Blogs";
import { Process } from "./components/Process";
import { TechStack } from "./components/TechStack";
import { About } from "./components/About";
import { FiverrCTA } from "./components/FiverrCTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WaveDivider from="#ffffff" to="#F8FAFC" />
        <Problems />
        <WaveDivider from="#F8FAFC" to="#ffffff" />
        <Services />
        <WaveDivider from="#ffffff" to="#F8FAFC" />
        <Projects />
        <WaveDivider from="#F8FAFC" to="#ffffff" />
        <Blogs />
        <WaveDivider from="#ffffff" to="#F8FAFC" />
        <Process />
        <TechStack />
        <About />
        <FiverrCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
