import patternsvg from '../assests/pattern.svg';
import pattern2 from '../assests/pattern2.svg';
interface CabezeraProps {

  repeatCount: number;

  patternType: number; // Recibe el número de patrón

}

export function CabezeraPatron({ repeatCount, patternType }: CabezeraProps) {
  if (patternType < 1) {
    return <div>No hay patron numerado antes del 1</div>;
  }

  const patterns: Record<number, string> = {
    1: patternsvg,
    2: pattern2,
  };

  const selectedPattern = patterns[patternType];

  if (!selectedPattern) {
    return <div>Patrón número {patternType} no disponible</div>;
  }

  // Identifica si es el patrón vertical basado en su ID
  const isVertical = patternType === 2;

  return (
    <div
      className="cabezera-patron"
      style={{
        display: "flex",
        // Invierte el layout de fila a columna
        flexDirection: isVertical ? "column" : "row",
        // Invierte quién dicta la restricción fija
        width: isVertical ? "100px" : "max-content",
        height: isVertical ? "max-content" : "100px",
      }}
    >
      {Array.from({ length: repeatCount }).map((_, index) => (
        <img
          key={index}
          src={selectedPattern}
          alt={`Patron ${patternType} instancia ${index}`}
          style={{
            // Invierte el escalado de la imagen
            width: isVertical ? "100%" : "auto",
            height: isVertical ? "auto" : "100%",
            display: "block",
            flexShrink: 0
          }}
        />
      ))}
    </div>
  );
}
