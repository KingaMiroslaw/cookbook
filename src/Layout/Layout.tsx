import PageHeader from "../components/PageHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen flex flex-col overflow-hidden">
      <PageHeader />
      <div className="overflow-auto">{children}</div>
    </div>
  );
};
export default Layout;
