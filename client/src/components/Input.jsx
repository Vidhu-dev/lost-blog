export function Input({
  size,
  type = "text",
  label,
  name,
  value,
  placeholder,
  onChange,
  defaultValue,
  children,
  padding = "px-2 py-1",
  disabled,
  hidden,
  src,
  noBorder,
  className
}) {
  const textSize =
    size === "small" ? "text-sm" : size === "large" ? "text-xl" : "text-base";

  return (
    <div className="flex flex-col gap-1">
      <label className={`font-medium ${textSize}`} htmlFor={name}>
        {label}
      </label>
      <div className="relative grid">
        <input
          src={src}
          className={`border-black ${hidden && "hidden"} ${padding} bg-amber-100 ${!noBorder && "border"} border-dark bg-background-100 focus:ring-primary ${textSize} focus:border-0 focus:outline-none focus:ring-2 ${className}`}
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          defaultValue={defaultValue}
          disabled={disabled}
          required
        />
      </div>
    </div>
  );
}
