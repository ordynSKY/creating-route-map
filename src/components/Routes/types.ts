export default interface IRoute {
  id: number | undefined;
  title: string;
  shortDescription: string;
  description: string;
  length: number;
}

export interface IRouteArray {
  index: number;
  route: IRoute;
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

export type TRouteArray = IRoute[];
