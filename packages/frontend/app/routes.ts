import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("/:uid", "./routes/user.tsx"),
  route("/:uid/edit", "./routes/edit.tsx"),
] satisfies RouteConfig;
