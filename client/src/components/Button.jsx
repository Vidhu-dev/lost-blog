function Button({
  type,
  primary,
  children,
  secondry,
  className,
  padding = "px-4 py-1.5",
  margin = "my-2",
  onClick,
  dark,
}) {
  return (
    <button
      className={` ${className} ${primary ? "bg-primary text-background-100" : secondry ? "bg-secondry" : dark ? "bg-text" : "bg-background-400 text-text"} ${padding} font-bold text-background-100 ${margin}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
