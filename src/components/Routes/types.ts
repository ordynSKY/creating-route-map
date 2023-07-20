export default interface IRoute {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  length: number;
}

export interface IRouteArray {
  index: number;
  route: IRoute;
  setActive: (arg: boolean) => void;
}

export type TRouteArray = IRoute[];
