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

export interface IRouteBlock {
  setActive: (arg: boolean) => void;
  setRoute: (arg: number | undefined) => void;
}

export interface IRouteForm {
  setActive: (arg: boolean) => void;
  maxLength: number;
}

export type TRouteArray = IRoute[];
