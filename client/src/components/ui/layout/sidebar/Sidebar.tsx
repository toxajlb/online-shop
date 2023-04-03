import { FC, PropsWithChildren } from "react";

const Sidebar: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <aside className="h-screen bg-secondary">Sidebar</aside>;
};

export default Sidebar;
