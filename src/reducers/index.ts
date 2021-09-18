import { combineReducers, Dispatch } from "redux"
import { useSelector, useDispatch } from "react-redux"
import { AppReducer } from "./app/reducer"
import { CacheReducer } from "./cache/reducer"
import { AppActionUnion } from "./app"
import { CacheActionUnion } from "./cache"

export const rootReducer = combineReducers({
  cache: CacheReducer,
  app: AppReducer,
})
export type ActionUnion = CacheActionUnion | AppActionUnion
export type RootState = ReturnType<typeof rootReducer>

export const useReduxSelector = <T>(fn: (state: RootState) => T): T =>
  useSelector<RootState, T>(fn)
export const useReduxDispatch = (): Dispatch<ActionUnion> =>
  useDispatch<Dispatch<ActionUnion>>()
