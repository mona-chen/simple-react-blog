import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/layout/header";

export default function Home() {
  const location = useLocation();

  const isLogin = location.pathname.includes("login");
  return (
    <div>
      <Header />
      <main className="main-page">
        {!isLogin && (
          <div className="page-title">
            <h2>Welcome to my Blog</h2>
            <p>I post my daily lifestyle here on this blog</p>
          </div>
        )}

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
