import Navbar from "./components/Navbar";
import './css/Navbar.css';
import './css/BodySection.css'
import './css/Footer.css';
import './css/chat.css';
import productData from './data';
import BodySection from "./pages/BodySection";
import Footer from "./components/Footer";
import SocialMediaBtn from "./components/socialMediaBtn";

function App() {

  return (
    <>
      <Navbar />
      <BodySection data={productData} />
      <SocialMediaBtn />
      <Footer />
    </>
  );
}

export default App;
