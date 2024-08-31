import Button from "../Button";
import Logo from "../Logo";
import Styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <Logo />

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
      </ul>

      <span className={Styles.space}></span>

      <Button>ثبت نام</Button>
    </nav>
  );
}
