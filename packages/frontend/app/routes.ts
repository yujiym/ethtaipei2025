import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('./routes/home.tsx'),
  route('/:name/start', './routes/start.tsx'),
  route('/:name/edit', './routes/edit.tsx')
] satisfies RouteConfig
