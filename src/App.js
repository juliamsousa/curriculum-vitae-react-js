import Header from './components/header/Header';
import About from './components/about/About';
import Experiences from './components/experiences/Experiences';
import Formation from './components/formation/Formation';
import Voluntary from './components/voluntary/Voluntary';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <hr className="separator"/>
      <Projects/>
      <hr className="separator"/>
      <Formation />
      <hr className="separator"/>
      <Experiences/>
      <hr className="separator"/>
      <Voluntary/>
      <hr className="separator"/>
      <Footer/>
    </div>
  );
}

export default App;
