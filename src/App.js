import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import ContentSectionWith2Col from './components/contentSection/contentSectionWith2Col';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentSectionWith2Col/>
     
      
    </div>
  );
}

export default App;
