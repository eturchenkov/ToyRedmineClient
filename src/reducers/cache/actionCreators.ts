export enum CacheActionType {
  addComment = "addComment",
}

export const addComment = (
  comment: IComment,
): Action<CacheActionType.addComment, { comment: IComment }> => ({
  type: CacheActionType.addComment,
  payload: { comment },
})
