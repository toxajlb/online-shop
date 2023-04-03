import { FC, PropsWithChildren } from "react";

const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <div className="bg-secondary w-full">Header</div>;
};

export default Header;
