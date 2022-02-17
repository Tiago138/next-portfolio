import Link from "next/link";

import { useRouter } from "next/router";

function MenuItem(props) {
  const router = useRouter();

  function active(path) {
    return router.pathname === path ? "active" : "";
  }

  return (
    <li
      className={`menu-nav__item ${active(props.path)} ${props.open}`}
      onClick={props.toggleMenuLink}
    >
      <Link href={props.path}>
        <span className="menu-nav__link">{props.page}</span>
      </Link>
    </li>
  );
}

export default MenuItem;
