import { useBoard } from '../hooks/useBoard'
import { BOARD_TURNS } from '../interfaces/board'

export default function Turns() {
  const { turn, points, gameStarted, changeTurn } = useBoard()

  return (
    <section className="mb-4">
      <div className="flex gap-2">
        <button
          onClick={() => changeTurn(BOARD_TURNS.X)}
          className={`w-full border-2 rounded-xl flex justify-between px-5 py-2 ${
            turn === BOARD_TURNS.X ? 'border-b-teal-300' : 'border-slate-100'
          }`}
          disabled={gameStarted}>
          <span>{BOARD_TURNS.X}</span>
          <span>{points.x !== 0 ? points.x : '-'}</span>
        </button>

        <button
          onClick={() => changeTurn(BOARD_TURNS.O)}
          className={`w-full border-2 rounded-xl flex justify-between px-5 py-2 ${
            turn === BOARD_TURNS.O ? 'border-b-teal-300' : 'border-slate-100'
          }`}
          disabled={gameStarted}>
          <span>{BOARD_TURNS.O}</span>
          <span>{points.o !== 0 ? points.o : '-'}</span>
        </button>
      </div>

      <span className="font-semibold text-sm">Turn of: {turn}</span>
    </section>
  )
}
