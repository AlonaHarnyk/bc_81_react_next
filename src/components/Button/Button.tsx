interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  textContent: string;
  handleClick: () => void;
}
export default function Button({
  type,
  textContent,
  handleClick,
}: ButtonProps) {
  return (
    <button type={type} onClick={handleClick}>
      {textContent}
    </button>
  );
}
