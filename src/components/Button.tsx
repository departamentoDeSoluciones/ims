import './Button.css';
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

function Button({
  label,
  onClick = () => console.log(`Clic en botón: ${label}`)
}: ButtonProps) {
  return (
    <div className="main-container">
      <button
        className="main-button"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
