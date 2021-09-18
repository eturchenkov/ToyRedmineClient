export enum AppActionType {
  addProjectList = "addProjectList",
  addIssueList = "addIssueList",
}

export const addProjectList = (
  projectList: IProject[],
): Action<AppActionType.addProjectList, { projectList: IProject[] }> => ({
  type: AppActionType.addProjectList,
  payload: { projectList },
})
export const addIssueList = (
  issueList: IIssue[],
): Action<AppActionType.addIssueList, { issueList: IIssue[] }> => ({
  type: AppActionType.addIssueList,
  payload: { issueList },
})
