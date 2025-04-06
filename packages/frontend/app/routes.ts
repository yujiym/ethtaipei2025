import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./routes/home.tsx"),
  route("/:uid", "./routes/user.tsx"),
  route("/:uid/edit", "./routes/edit/index.tsx"),
] satisfies RouteConfig;
