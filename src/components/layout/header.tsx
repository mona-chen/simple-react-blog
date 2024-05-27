import "./styles.css";
import { Button } from "../../components/ui/button";

export default function Header() {
  return (
    <div className="flex flex-row justify-between header">
      <div>Logo</div>

      <div className="flex flex-row gap-2 header__menu">
        <p>Home</p>
        <p>Blog</p>
        <p>About</p>
        <p>Login</p>
      </div>

      <Button>Login</Button>
    </div>
  );
}
