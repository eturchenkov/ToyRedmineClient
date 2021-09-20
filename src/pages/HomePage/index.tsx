import { useEffect } from "react"
import { agent } from "services"

export const HomePage: React.FC = () => {
  useEffect(() => {
    agent({
      method: "GET",
      url: "/projects.json",
      params: { key: "2fda745bb4cdd835fdf41ec1fab82a13ddc1a54c" },
    })
  }, [])
  return <div>home</div>
}
