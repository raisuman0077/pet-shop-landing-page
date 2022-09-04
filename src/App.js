import Navbar from "./components/Navbar";
import './css/Navbar.css';
import './css/BodySection.css'
import './css/Footer.css';
import productData from './data';
import BodySection from "./pages/BodySection";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <BodySection data={productData} />
      <Footer />
    </>
  );
}

export default App;
