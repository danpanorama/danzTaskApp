export const ActionButton = ({ label, onClick, color = "blue", disabled = false, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`action-button ${className}`}
      style={{ backgroundColor: color, cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {label}
    </button>
  );
};
