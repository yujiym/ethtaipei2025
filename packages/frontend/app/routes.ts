import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("/:uid", "./routes/user.tsx"),
  route("/:uid/edit", "./routes/edit.tsx"),
  route("/pinata", "./routes/pinata.tsx"),
  route("/blog", "./routes/blog.tsx"),
] satisfies RouteConfig;
