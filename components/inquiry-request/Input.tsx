export default function Input({
  label,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-xs md:text-sm font-medium text-black mb-1 sm:mb-1.5">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-[10px] sm:text-xs text-stone-900 placeholder-stone-400 outline-none transition-all focus:border-amber-400 focus:ring-2 focus:ring-amber-400/10 hover:border-stone-300 ${error ? "border-red-400" : "border-stone-200"}`}
      />
      {error && (
        <p className="mt-1 text-[10px] text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
}
