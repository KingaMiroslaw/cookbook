const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-screen flex flex-col">
      {/* Header component */}
      <div>{children}</div>
    </div>
  );
};
export default Layout;
