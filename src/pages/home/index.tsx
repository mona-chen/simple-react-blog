import { Outlet } from "react-router-dom";
import Header from "../../components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="main-page">
        <div className="page-title">
          <h2>Welcome to my Blog</h2>
          <p>I post my daily lifestyle here on this blog</p>
        </div>

        <div className="page-content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
