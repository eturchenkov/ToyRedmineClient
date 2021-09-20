export enum AppActionType {
  addProjectList = "addProjectList",
  addIssueList = "addIssueList",
}

export const addProjectList = (
  projectList: ProjectItem[],
): Action<AppActionType.addProjectList, { projectList: ProjectItem[] }> => ({
  type: AppActionType.addProjectList,
  payload: { projectList },
})
export const addIssueList = (
  issueList: IIssue[],
): Action<AppActionType.addIssueList, { issueList: IIssue[] }> => ({
  type: AppActionType.addIssueList,
  payload: { issueList },
})
