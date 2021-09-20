import { RouterSwitch } from "react-typesafe-routes"
import { router } from "routes"

export const App: React.FC = () => {
  return (
    <div>
      <RouterSwitch router={router} />
    </div>
  )
}
