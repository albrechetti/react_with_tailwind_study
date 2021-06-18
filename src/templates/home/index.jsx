import { Navbar } from '../../components/navbar/';
import Hero from '../../components/hero';
import ContentSectionWith2Col from '../../components/contentSection/contentSectionWith2Col';
import ContentSectionWith3Col from '../../components/contentSection/contentSectionWith3Col';
import { RecipeGalery } from '../../components/recipeGalery';
import Chefs from '../../components/chefs/chefs';
import { Footer } from '../../components/footer';


export function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContentSectionWith2Col />
      <ContentSectionWith3Col />
      <RecipeGalery />
      <Chefs/>
      <Footer/>
    </div>
  );
}


