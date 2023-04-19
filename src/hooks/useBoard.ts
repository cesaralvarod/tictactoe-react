import { useContext } from 'react'

import { BoardContext } from '../context/board/BoardContext'
import { BOARD_TURNS, BOARD_WINNER_COMBOS } from '../interfaces/board'

export const useBoard = () => {
  const { board, actions } = useContext(BoardContext)

  const { values, turn, winner, points, gameStarted } = board // destructuring board field
  const {
    setValues,
    setTurn,
    setWinner,
    resetValues,
    setPoints,
    setGameStarted,
  } = actions // destructuring actions field

  const checkWinner = (valuesToCheck: typeof values) => {
    for (const combo of BOARD_WINNER_COMBOS) {
      const [a, b, c] = combo

      if (
        valuesToCheck[a] &&
        valuesToCheck[a] === valuesToCheck[b] &&
        valuesToCheck[b] === valuesToCheck[c]
      ) {
        const winner = valuesToCheck[a]

        // add points
        if (winner === BOARD_TURNS.X) setPoints({ x: points.x + 1 })
        if (winner === BOARD_TURNS.O) setPoints({ o: points.o + 1 })

        setGameStarted(false) // game over

        return winner
      }
    }

    return null
  }

  const checkEndGame = (valuesToCheck: typeof values) => {
    return valuesToCheck.every((value: string | null) => value !== null)
  }

  const updateBoard = (index: number) => {
    if (values[index] || winner) return

    setGameStarted(true)

    const newTurn = turn === BOARD_TURNS.X ? BOARD_TURNS.O : BOARD_TURNS.X
    const newValues = [...values]
    newValues[index] = turn

    setValues(newValues)
    setTurn(newTurn)

    const newWinner = checkWinner(newValues)

    if (newWinner) {
      setWinner(newWinner)
      setGameStarted(false)
    } else if (checkEndGame(newValues)) {
      setWinner(false)
      setGameStarted(false)
    }
  }

  const changeTurn = (turn: BOARD_TURNS) => {
    setTurn(turn)
  }

  const resetGame = () => {
    setTurn(BOARD_TURNS.X)
    resetValues()
    setWinner(null)
  }

  return {
    values,
    turn,
    winner,
    points,
    gameStarted,
    updateBoard,
    resetGame,
    changeTurn,
  }
}
