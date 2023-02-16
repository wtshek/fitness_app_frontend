import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import cx from "classnames";
import { PATH } from "##/utils/constant";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
  to: string;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, isActive, to }) => {
  return (
    <button
      className={cx({
        "text-white w-1/2 py-4 font-bold": true,
      })}
    >
      <Link className={cx(isActive ? "text-blue" : "text-white")} to={to}>
        {children}
      </Link>
    </button>
  );
};

export const BottomNavBar: FC = () => {
  const { pathname } = useLocation();
  const onWorkOutButtonClick = () => {};
  const onExerciseButtonClick = () => {};

  return (
    <div
      className={`fixed bottom-0 flex flex-row justify-between w-screen bg-transparent backdrop-blur-md h-mobileBottomNavBar`}
    >
      <Button
        onClick={onWorkOutButtonClick}
        isActive={pathname === PATH.HOME}
        to={PATH.HOME}
      >
        Workout
      </Button>
      <Button
        onClick={onExerciseButtonClick}
        isActive={pathname === PATH.EXERCISE}
        to={PATH.EXERCISE}
      >
        Exercises
      </Button>
    </div>
  );
};
