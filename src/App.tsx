import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './App.css'
import { CabezeraPatron } from "./components/CabezeraPatron";
import NavBar from "./components/NavBar";
import SquareGallery from "./components/SquareGallery";
import Button from "./components/Button";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="page">

      <NavBar />
      <h1>Instituto Méxicano de Sanación. </h1>
      <CabezeraPatron repeatCount={2} patternType={1} />
      <div className="text-container">
        <p> Etiam nibh lectus, imperdiet bibendum feugiat non, faucibus id ante. Fusce efficitur, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; turpis sed luctus varius, diam leo gravida leo, id sollicitudin purus diam et neque. </p>
        <p>  Maecenas semper, ex at tempus pellentesque, justo purus fermentum risus, et vulputate odio odio id mauris. Aliquam quis urna rhoncus, gravida augue a, pulvinar ex. Nullam semper vel mi eget pulvinar. Phasellus fringilla sem quis tellus lacinia, a suscipit ante mollis. Suspendisse potenti.</p>
      </div>
      <SquareGallery />
      <p>Vestibulum egestas feugiat eros, congue imperdiet tortor ultrices vel. Aliquam commodo auctor nisi at efficitur. Suspendisse vel dapibus est. Sed vitae tempor elit. Duis vulputate est ut mi dictum, cursus congue risus ornare. Proin velit justo, ultricies sed augue eu, tempus mollis lacus. Vivamus malesuada risus et nisi ultrices, sed venenatis libero pellentesque. Integer feugiat felis id venenatis vehicula. Etiam sodales justo nisi, in sagittis massa lobortis et. Quisque et leo sapien. Pellentesque fringilla sapien in elit aliquam laoreet. Donec eget felis in nibh placerat viverra sit amet ut tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dictum pellentesque purus vitae efficitur. Duis a velit sed felis aliquet tincidunt. Integer id sollicitudin nulla.</p>


      <div className="red-container">
        <CabezeraPatron repeatCount={2} patternType={2} />
        <div className="white-container">
          <h2>Sanacion Cuerpo</h2>
          <p> Etiam nibh lectus, imperdiet bibendum feugiat non, faucibus id ante. Fusce efficitur, Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; turpis sed luctus varius, diam leo gravida leo, id sollicitudin purus diam et neque. </p>
          <Button label=" Contactanos " />
          <p>  Maecenas semper, ex at tempus pellentesque, justo purus fermentum risus, et vulputate odio odio id mauris. Aliquam quis urna rhoncus, gravida augue a, pulvinar ex. Nullam semper vel mi eget pulvinar. Phasellus fringilla sem quis tellus lacinia, a suscipit ante mollis. Suspendisse potenti.</p>
          <div />
        </div>

        <CabezeraPatron repeatCount={2} patternType={2} />
      </div>

      <CabezeraPatron repeatCount={2} patternType={1} />
    </div>

  )
}

export default App;
