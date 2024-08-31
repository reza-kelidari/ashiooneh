import House from "../../Icons/House";
import Styles from "./styles.module.scss";

export default function Logo() {
  return (
    <a href="/" className={Styles.logo}>
      <House fill="#16a249" />
      <span className={Styles.title}>آشیونه</span>
    </a>
  );
}
