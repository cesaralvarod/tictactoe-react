import Swal from 'sweetalert2'
import confetti from 'canvas-confetti'

import { useBoard } from '../hooks/useBoard'
import ResetGameBtn from './ResetGameBtn'
import Square from './Square'
import Turns from './Turns'

export default function Board() {
  const { values, winner, updateBoard, resetGame } = useBoard()

  if (winner) {
    Swal.fire(`${winner} won!`).then(() => resetGame())
    confetti()
  } else if (winner === false) {
    Swal.fire('Draw').then(() => resetGame())
  }

  return (
    <div>
      <Turns />
      <section className="grid grid-cols-3 max-w-sm mx-auto gap-5">
        {values.map((val, index) => (
          <Square
            key={index}
            value={val}
            index={index}
            updateBoard={(index: number) => updateBoard(index)}
          />
        ))}
      </section>

      <ResetGameBtn />
    </div>
  )
}
