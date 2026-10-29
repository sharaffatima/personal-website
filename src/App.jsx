import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Tools from './components/Tools';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to content</a>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Tools />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
