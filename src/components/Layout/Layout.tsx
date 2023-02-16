import { FC } from "react";
import { BottomNavBar } from "./BottomNavBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {children}
      <BottomNavBar />
    </div>
  );
};
