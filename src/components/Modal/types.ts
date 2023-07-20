import IRoute from "../Routes/types";

export interface IModal {
  active: boolean;
  setActive: (arg: boolean) => void;
  oneNewRoute: (e: IRoute) => void | undefined;
}
