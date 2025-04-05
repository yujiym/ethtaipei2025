import { Link } from "react-router";
import Logo from "~/assets/logo.svg";

export default function Header() {
  return (
    <header className="sticky top-0 h-16 bg-white/50 backdrop-blur-sm flex flex-row items-center justify-between px-4">
      <Link to="/">
        <img src={Logo} alt="EPO" height={52} width={52} />
      </Link>
      <button type="button" className="btn" onClick={() => console.log("aaa")}>
        Connect
      </button>
    </header>
  );
}
