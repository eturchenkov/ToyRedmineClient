import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./configureStore"
import { App } from "./App"
import "./index.css"

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/index")
  worker.start()
}

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
)
