import Footer from './components/Footer';
import GallarySection from './components/GallarySection';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import ProductSection from './components/ProductSection';
import ServicesSection from './components/ServicesSection';
import TrainingSection from './components/TrainingSection';
import UpdateSection from './components/UpdateSection';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <ServicesSection />
      <UpdateSection />
      <ProductSection />
      <TrainingSection />
      <GallarySection />
      <Footer />
    </div>
  );
}

export default App;
