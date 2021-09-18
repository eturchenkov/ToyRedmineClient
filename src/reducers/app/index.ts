import * as AC from "./actionCreators"

export type AppActionUnion =
  | ReturnType<typeof AC.addProjectList>
  | ReturnType<typeof AC.addIssueList>
