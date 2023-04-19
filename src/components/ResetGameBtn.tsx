import { useBoard } from '../hooks/useBoard'

export default function ResetGameBtn() {
  const { resetGame } = useBoard()

  return (
    <div className="mt-3">
      <button
        onClick={resetGame}
        className="bg-teal-200 block w-full p-2 rounded-xl border-2 border-teal-300 hover:bg-teal-300 text-slate-800 font-bold uppercase">
        Reset game
      </button>
    </div>
  )
}
