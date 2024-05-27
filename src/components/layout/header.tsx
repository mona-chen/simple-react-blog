import "./styles.css";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between header">
      <div>Logo</div>

      <div className="flex flex-row gap-2 header__menu">
        <p>Home</p>
        <p>Blog</p>
        <p>About</p>
      </div>

      <Button onClick={() => navigate("/login")}>Login</Button>
    </div>
  );
}
