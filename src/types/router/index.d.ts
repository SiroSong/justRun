interface RouterConfig {
  path: string
  layout?: any
  component?: any
  routes?: RouterConfig[]
  title?: string
  icon?: string
  visible?: boolean
  redirect?: string
}