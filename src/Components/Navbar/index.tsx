import { useState } from "react";
import Menu from "../../Icons/Menu";
import Button from "../Button";
import Logo from "../Logo";
import Styles from "./styles.module.scss";

/**
 * This component renders a navigation bar for top of screen
 *
 * @returns {JSX.Element}
 */
export default function Navbar(): JSX.Element {
  /**
   * This state declares should menu be shown or not
   */
  const [menuShown, setMenuShown] = useState<boolean>(false);

  return (
    <nav className={Styles.navbar}>
      <Logo />

      <button
        className={[Styles.menu, menuShown ? Styles.shown : ""].join(" ")}
        onClick={() => setMenuShown((prevState) => !prevState)}
      >
        <Menu />
      </button>

      <ul className={Styles.links}>
        <li className={Styles.link}>
          <a href="#">خرید</a>
        </li>
        <li className={Styles.link}>
          <a href="#">فروش</a>
        </li>
        <li className={Styles.link}>
          <a href="#">تماس با ما</a>
        </li>
        <li className={Styles.link}>
          <a href="#">درباره ما</a>
        </li>

        <span className={Styles.space}></span>

        <Button>ثبت نام</Button>
      </ul>
    </nav>
  );
}
