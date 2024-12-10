import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="min-h-screen bg-secondary-light text-black  p-5">{children}</div>;
};

export default Layout;
