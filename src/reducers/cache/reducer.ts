import { CacheActionUnion } from "./index"
import { CacheActionType } from "./actionCreators"

interface CacheState {
  commentList: IComment[]
}

export const CacheReducer = (
  state: CacheState = { commentList: [] },
  action: CacheActionUnion,
): CacheState => {
  switch (action.type) {
    case CacheActionType.addComment: {
      return state
    }
    default: {
      return state
    }
  }
}
