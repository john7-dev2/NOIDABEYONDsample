import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import FeaturedPlaces from './components/FeaturedPlaces';
import Tours from './components/Tours';
import Guides from './components/Guides';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Categories />
      <FeaturedPlaces />
      <Tours />
      <Guides />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
