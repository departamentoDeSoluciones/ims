import './Footer.css';

function Footer() {
  return (
    <footer className="footer-padre">

      <div className="div-izquierdo">
        <h2>I M S</h2>
        <p>Instituto Mexicano de Sanación</p>
      </div>

      <div className="div-centro">
        <span>[Icono 1]</span>
        <span>[Icono 2]</span>
      </div>

      <div className="div-derecho">
        <code>
          // SYS.DESIGN<br />
          &gt; dep.DSoluciones_2026<br />
          &gt; STATUS: ONLINE
        </code>
      </div>

    </footer>
  );
}

export default Footer;
