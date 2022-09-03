import Navbar from "./pages/Navbar";
import './css/Navbar.css';
import './css/BodySection.css'
import productData from './data';
import BodySection from "./pages/BodySection";

function App() {
  return (
    <>
      <Navbar />
      <BodySection data={productData} />
    </>
  );
}

export default App;
