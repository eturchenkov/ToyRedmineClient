import { AppActionUnion } from "./index"
import { AppActionType } from "./actionCreators"

interface AppState {
  projectList: IProject[]
  issueList: IIssue[]
}

export const AppReducer = (
  state: AppState = { projectList: [], issueList: [] },
  action: AppActionUnion,
): AppState => {
  switch (action.type) {
    case AppActionType.addProjectList: {
      return state
    }
    default: {
      return state
    }
  }
}
