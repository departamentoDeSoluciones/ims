import './NavBar.css';

function NavBar() {
  const botones = [
    { label: "Inicio" },
    { label: "Blog" },
    { label: "Contactanos" }
  ];

  return (
    <nav className="nav-container">
      {/* Mitad Izquierda (50%) */}
      <div className="nav-logo">
        <p>I M S</p>
      </div>

      {/* Mitad Derecha (50%) */}
      <div className="nav-menu">
        {botones.map((boton) => (
          <button
            key={boton.label}
            className="nav-btn"
            onClick={() => console.log(`Clic en ${boton.label}`)}
          >
            {boton.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
