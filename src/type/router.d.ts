/**
 * @type Routes 路由规则类型
 */
interface Routes {
  path: string;
  element: JSX.Element;
  children?: RoutesType;
  author: boolean;
}
/**
 * @type RoutesType 路由匹配规则
 */
type RoutesType = Array<Routes>;

/**
 * @type AuthorPropsType 路由鉴权组件props类型
 */
interface AuthorPropsType {
  element: JSX.Element;
  path: string;
}
