import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col justify-between  bg-background-100 font-source text-text">
      <Header />
      <main className="flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
