import { ReactNode } from "react";

module.exports = {
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "/" }),
  Link: ({ children }: { children: ReactNode }) => <div>{children}</div>,
};

export {};
