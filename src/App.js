
import './App.css';
import Classdetail from './pages/Classdetail';
import Header from './pages/Header';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import WaterMark from 'watermark-component-for-react';
function App() {
  return (
    <div className="App">
      <WaterMark content="Sample">

      <Header />
      <Classdetail />
      <Pricing />
      <About />
      <Contact />
        <Footer />
        </WaterMark>
    </div>
  );
}

export default App;
