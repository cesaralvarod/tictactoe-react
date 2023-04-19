interface Props {
  value: string | null
  index: number
  updateBoard: (index: number) => void
}

export default function Square({ value, index, updateBoard }: Props) {
  const handleClick = () => updateBoard(index)

  return (
    <button
      className="border-slate-500 border-2 rounded-xl w-28 h-28 flex items-center justify-center"
      onClick={handleClick}
      disabled={value !== null}>
      <span className="text-[60px] text-slate-500">{value}</span>
    </button>
  )
}
