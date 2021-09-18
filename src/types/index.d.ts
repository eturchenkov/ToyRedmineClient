/// <reference types="react-scripts" />

interface Action<T, P> {
  type: T
  payload: P
}

interface IProject {
  id: string
}
interface IIssue {
  id: string
}
interface IComment {
  text: string
}
