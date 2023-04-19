export const BOARD_WINNER_COMBOS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export enum BOARD_TURNS {
  X = '❌',
  O = '⚪',
}

export enum BoardActionKind {
  SET_WINNER = 'SET_WINNER',
  SET_VALUES = 'SET_VALUES',
  SET_TURN = 'SET_TURN',
  RESET_VALUES = 'RESET_VALUES',
  SET_POINTS = 'SET_POINTS',
  SET_GAME_STARTED = 'SET_GAME_STARTED',
}

// local actions

type SetWinnerReducerAction = {
  type: BoardActionKind.SET_WINNER
  payload: BoardState['winner']
}

type SetValuesReducerAction = {
  type: BoardActionKind.SET_VALUES
  payload: Array<null | string>
}

type SetTurnReducerAction = {
  type: BoardActionKind.SET_TURN
  payload: BOARD_TURNS
}

type ResetValuesReducerAction = {
  type: BoardActionKind.RESET_VALUES
  payload?: null
}

type SetPointsReducerAction = {
  type: BoardActionKind.SET_POINTS
  payload: {
    x?: number
    o?: number
  }
}

type SetGameStartedReducerAction = {
  type: BoardActionKind.SET_GAME_STARTED
  payload: boolean
}

export type BoardReducerActions =
  | SetWinnerReducerAction
  | SetValuesReducerAction
  | SetTurnReducerAction
  | ResetValuesReducerAction
  | SetPointsReducerAction
  | SetGameStartedReducerAction

export type BoardState = {
  winner: null | string | boolean
  values: Array<null | string>
  turn: BOARD_TURNS
  gameStarted: boolean
  points: {
    x: number
    o: number
  }
}

export type BoardActions = {
  setWinner: (winner: SetWinnerReducerAction['payload']) => void
  setValues: (values: SetValuesReducerAction['payload']) => void
  setTurn: (turn: SetTurnReducerAction['payload']) => void
  setPoints: (points: SetPointsReducerAction['payload']) => void
  setGameStarted: (isStarted: SetGameStartedReducerAction['payload']) => void
  resetValues: () => void
}
