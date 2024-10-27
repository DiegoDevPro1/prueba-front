import { RouteInterface } from "./Route";

export interface ModuleInterface {
  name: string;
  icon:string;
  pathModule:string;
  routes: RouteInterface[];
}
