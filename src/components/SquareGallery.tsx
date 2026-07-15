import './SquareGallery.css';
function SquareGallery() {

  const images = [
    {
      // Norte: Tula (Tezcatlipoca)
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Atlantes_de_Tula3.jpg",
      alt: "Atlantes de Tula - Templo de Tezcatlipoca",
    },
    {
      // Este: Monte Albán (Xipe Tótec)
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Edificio_E_Monte_Albán.JPG",
      alt: "Ruinas de Monte Albán - Valles Centrales",
    },
    {
      // Oeste: Teotihuacán (Quetzalcóatl)
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Teotihuacan_Mexico_2018.jpg",
      alt: "Pirámides y calzada - Teotihuacán",
    },
    {
      // Sur: Templo Mayor (Huitzilopochtli)
      src: "https://commons.wikimedia.org/wiki/Special:FilePath/Explanada_del_Templo_Mayor_y_Catedral_Metropolitana.jpg",
      alt: "Ruinas del Templo Mayor - Tenochtitlan",
    }
  ];

  return (

    <div className="gallery-container">
      {images.map((image) => (
        <div
          className="main"
          key={image.src}
          style={{
            display: "grid",
            placeItems: "center",
          }}>
          <img
            className="scroll-image"
            src={image.src}
            alt={image.alt}
            style={{
              width: "80vw",
              objectFit: "cover",
            }}
          />
        </div>
      ))}



    </div>

  );

}
export default SquareGallery;
