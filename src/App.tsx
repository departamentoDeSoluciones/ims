import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'
import { CabezeraPatron } from "./components/CabezeraPatron";
import NavBar from "./components/NavBar";
import SquareGallery from "./components/SquareGallery";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="page">

      <NavBar />
      <h1>Instituto Méxicano de Sanación. </h1>
      <CabezeraPatron repeatCount={2} />
      <SquareGallery />
      <CabezeraPatron repeatCount={3} />

    </div>

  )
}

export default App;
