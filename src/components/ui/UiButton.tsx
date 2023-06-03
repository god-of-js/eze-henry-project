interface Props {
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
export default function UiButton({
  children,
  disabled,
  loading,
  onClick,
}: Props) {
  return (
    <button
      className={disabled || loading ? "disabled" : ""}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
