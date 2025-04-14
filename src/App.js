import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App