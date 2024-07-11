function Button({ primary, children, secondry, className }) {
  return (
    <button
      className={` ${className} ${primary ? "bg-primary text-background-100" : secondry ? "bg-secondry" : "bg-background-400"} rounded-full px-4 py-1.5 font-bold text-text outline outline-1 outline-background-500`}
    >
      {children}
    </button>
  );
}

export default Button;
