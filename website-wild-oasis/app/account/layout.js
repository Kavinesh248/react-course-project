import SideNavigation from "../_components/SideNavigation";

const Layout = function ({ children }) {
  return (
    <div className="grid h-full grid-cols-[16rem_1fr] gap-12">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
