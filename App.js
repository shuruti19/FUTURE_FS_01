import './App.css';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <Education />
        <Experiences />
        <Projects />
        <Skills />
        <Achievements />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
