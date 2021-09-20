import { AppActionUnion } from "./index"
import { AppActionType } from "./actionCreators"

interface AppState {
  projectList: Project[]
  issueList: IIssue[]
}

export const AppReducer = (
  state: AppState = { projectList: [], issueList: [] },
  action: AppActionUnion,
): AppState => {
  switch (action.type) {
    case AppActionType.addProjectList: {
      return {
        ...state,
        projectList: action.payload.projectList.map((project) => ({
          ...project,
          issueStatus: "empty",
        })),
      }
    }
    default: {
      return state
    }
  }
}
