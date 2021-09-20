import * as R from "remeda"
import { setupWorker } from "msw"
import { appService } from "mocks/appService"

export const worker = setupWorker(
  ...R.pipe(
    R.toPairs(appService),
    R.map(([, hander]) => hander),
  ),
)
