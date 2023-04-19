import {
  BoardReducerActions,
  BoardActionKind,
  BoardState,
} from '../../interfaces/board'

export const boardReducer = (
  state: BoardState,
  action: BoardReducerActions
) => {
  const { type, payload } = action

  switch (type) {
    case BoardActionKind.SET_WINNER:
      return { ...state, winner: payload }
    case BoardActionKind.SET_VALUES:
      return { ...state, values: payload }
    case BoardActionKind.SET_TURN:
      return { ...state, turn: payload }
    case BoardActionKind.RESET_VALUES:
      return { ...state, values: Array(9).fill(null) }
    case BoardActionKind.SET_POINTS:
      return { ...state, points: { ...state.points, ...payload } }
    case BoardActionKind.SET_GAME_STARTED:
      return { ...state, gameStarted: payload }
    default:
      return state
  }
}
