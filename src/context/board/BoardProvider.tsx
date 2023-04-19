import { ReactNode, useReducer } from 'react'

import { BoardContext } from './BoardContext'
import {
  BoardActionKind,
  BoardActions,
  BoardState,
  BOARD_TURNS,
} from '../../interfaces/board'
import { boardReducer } from './boardReducer'

const INITIAL_VALUE: BoardState = {
  values: Array(9).fill(null),
  turn: BOARD_TURNS.X,
  winner: null,
  gameStarted: false,
  points: {
    x: 0,
    o: 0,
  },
}

interface Props {
  children: ReactNode
}

export default function BoardProvider({ children }: Props) {
  const [boardState, dispatch] = useReducer(boardReducer, INITIAL_VALUE)

  // actions
  const setWinner: BoardActions['setWinner'] = winner =>
    dispatch({ type: BoardActionKind.SET_WINNER, payload: winner })

  const setValues: BoardActions['setValues'] = values =>
    dispatch({ type: BoardActionKind.SET_VALUES, payload: values })

  const setTurn: BoardActions['setTurn'] = turn =>
    dispatch({ type: BoardActionKind.SET_TURN, payload: turn })

  const resetValues = () => dispatch({ type: BoardActionKind.RESET_VALUES })

  const setPoints: BoardActions['setPoints'] = points =>
    dispatch({ type: BoardActionKind.SET_POINTS, payload: points })

  const setGameStarted: BoardActions['setGameStarted'] = isStarted =>
    dispatch({ type: BoardActionKind.SET_GAME_STARTED, payload: isStarted })

  return (
    <BoardContext.Provider
      value={{
        actions: {
          setWinner,
          setValues,
          setTurn,
          resetValues,
          setPoints,
          setGameStarted,
        },
        board: boardState,
      }}>
      {children}
    </BoardContext.Provider>
  )
}
