import { Redirect, useLocation } from "react-router-dom"
import { Router, RouteMiddleware, RouteComponent } from "react-typesafe-routes"
import { HomePage } from "pages/HomePage"
import { LoginPage } from "pages/LoginPage"
import { authService } from "services"

const AuthMiddleware: RouteMiddleware = (next: RouteComponent) => {
  const location = useLocation()

  // eslint-disable-next-line no-debugger
  console.log(location.pathname, authService.isAuthenticated())
  if (location.pathname === router.login().$) {
    if (authService.isAuthenticated()) {
      return () => <Redirect to={router.home().$} />
    } else {
      return next
    }
  } else {
    if (authService.isAuthenticated()) {
      return next
    } else {
      return () => <Redirect to={router.login().$} />
    }
  }
}

export const router = Router((route) => ({
  home: route("", {
    component: HomePage,
    middleware: AuthMiddleware,
  }),
  login: route("login", {
    component: LoginPage,
    middleware: AuthMiddleware,
  }),
  notFound: route("*", { component: () => <Redirect to={router.home().$} /> }),
}))
