type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="
        w-full rounded-xl py-3
        bg-primary
        text-white
        transition
        hover:bg-primaryHover
        disabled:opacity-50
      "
    >
      {children}
    </button>
  )
}