import patternsvg from '../assests/pattern.svg';

// Solo recibe cuántas veces se repite, nada más.
interface CabezeraProps {
  repeatCount: number;
}

export function CabezeraPatron({ repeatCount }: CabezeraProps) {
  return (
    <div
      className="cabezera-patron"
      style={{
        display: "flex",       // Alinea las imágenes una al lado de la otra
        width: "max-content",  // El div abraza el ancho total de todas las imágenes juntas
        height: "100px",       // AJUSTAR: La altura estática de tu diseño
      }}
    >
      {/* Crea un array vacío del tamaño de repeatCount y lo itera */}
      {Array.from({ length: repeatCount }).map((_, index) => (
        <img
          key={index}
          src={patternsvg}
          alt={`Patron ${index}`}
          style={{
            height: "100%", // Se amarra a los 100px del contenedor
            width: "auto",  // Mantiene su proporción original intacta automáticamente
            display: "block"
          }}
        />
      ))}
    </div>
  );
}
