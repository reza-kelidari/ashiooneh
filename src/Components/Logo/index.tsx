import House from "../../Icons/House";
import Styles from "./styles.module.scss";

/**
 * This component renders a logo for navbar and footer
 *
 * @returns {JSX.Element}
 */
export default function Logo({ dark = false }: { dark: boolean }): JSX.Element {
  return (
    <a href="/" className={[Styles.logo, dark ? Styles.dark : ""].join(" ")}>
      <House fill="#16a249" />
      <span className={Styles.title}>آشیونه</span>
    </a>
  );
}
