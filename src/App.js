import Navbar from "./components/Navbar";
import './css/Navbar.css';
import './css/BodySection.css'
import productData from './data';
import BodySection from "./pages/BodySection";

function App() {
  console.log(productData)
  return (
    <>
      <Navbar />
      <BodySection data={productData} />
    </>
  );
}

export default App;
