import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
function AppLayout() {
  return (
    <div className="flex min-h-dvh flex-col justify-between bg-background-100 font-source text-text">
      <Header />
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#599f48",
            },
          },
          error: {
            iconTheme: {
              primary: "#e5634e",
            },
          },
          loading: {
            iconTheme: {
              primary: "#606cd6",
            },
          },
          position: "top-right",
        }}
      />
      <main className="flex grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
