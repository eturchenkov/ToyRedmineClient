/// <reference types="react-scripts" />

interface Action<T, P> {
  type: T
  payload: P
}

type Project = ProjectItem & {
  issueStatus: "empty" | "loading" | "complete"
}
interface IIssue {
  id: string
}
interface IComment {
  text: string
}
