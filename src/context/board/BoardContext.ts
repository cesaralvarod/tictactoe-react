import { createContext } from 'react'
import { BoardActions, BoardState } from '../../interfaces/board'

export type BoardContextProps = {
  actions: BoardActions
  board: BoardState
}

export const BoardContext = createContext<BoardContextProps>(
  {} as BoardContextProps
)
