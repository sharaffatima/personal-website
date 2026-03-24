import styles from './App.module.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Interests from './components/Interests';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useCursor } from './hooks/useCursor';
import './styles/global.css';

function App() {
  const cursorRef = useCursor();

  return (
    <>
      <div id="cursor" ref={cursorRef} className={styles.cursor}></div>
      <Navigation />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
