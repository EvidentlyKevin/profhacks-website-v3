import styles from './App.module.css'
import { Schedule } from './components/Schedule/Schedule';
import { Pictures } from './components/Pictures/Pictures';
import { About } from './components/About/About';
import { Hero } from './components/Hero/Hero';
import { Navbar } from "./components/Navbar/Navbar";
import { FAQ } from "./components/FAQ/FAQ";
import { Sponsors } from "./components/Sponsors/Sponsors";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Pictures />
      <br></br>
      <center><h4>ProfHacks 2025</h4></center>
    </div>
  );
}

export default App
