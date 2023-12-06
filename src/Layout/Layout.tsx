import PageHeader from "../components/PageHeader";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader />
      <div>{children}</div>
    </div>
  );
};
export default Layout;
