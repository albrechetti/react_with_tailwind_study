import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import ContentSectionWith2Col from './components/contentSection/contentSectionWith2Col';
import ContentSectionWith3Col from './components/contentSection/contentSectionWith3Col';
import CounterSection from './components/counterSection/counterSection';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentSectionWith2Col />
      <ContentSectionWith3Col />
      <ContentSectionWith3Col />
      <ContentSectionWith2Col />
      <Footer/>
    </div>
  );
}

export default App;
