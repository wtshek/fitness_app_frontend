import { FC } from "react";
import { BottomNavBar } from "./BottomNavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {children}
      <BottomNavBar />
    </>
  );
};
