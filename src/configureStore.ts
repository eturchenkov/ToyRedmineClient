import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import storage from "redux-persist/lib/storage"
import { rootReducer, RootState } from "./reducers"

const persistConfig = {
  key: "cache",
  storage,
  whitelist: ["cache"],
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const persistedReducer = persistReducer<RootState, any>(
  persistConfig,
  rootReducer,
)
const middlewares =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk)

export const store = createStore(persistedReducer, {}, middlewares)
export const persistor = persistStore(store)
