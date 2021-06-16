import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import ContentSectionWith2Col from './components/contentSection/contentSectionWith2Col';
import ContentSectionWith3Col from './components/contentSection/contentSectionWith3Col';
import CounterSection from './components/counterSection/counterSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentSectionWith2Col />
      <ContentSectionWith3Col/>
    
      
    </div>
  );
}

export default App;
