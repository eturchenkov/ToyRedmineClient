import { rest } from "msw"
import { getFullPath } from "services"
// import { userPaths } from "services/userService"
import { projectList } from "./projectList"

export const appService = {
  getProjectList: rest.post(getFullPath(""), (_, res, ctx) =>
    res(ctx.status(200), ctx.json(JSON.stringify(projectList))),
  ),
}
