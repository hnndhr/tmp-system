type InputProps = {
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full rounded-xl border px-4 py-3
          bg-white
          text-textPrimary
          focus:outline-none focus:ring-2 focus:ring-primary
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}