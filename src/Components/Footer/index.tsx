import Logo from "../Logo";
import Styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.title}>
        <Logo dark />

        <p className={Styles.desc}>
          در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه بخری.
        </p>
      </div>
      <div className={Styles.links}>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <a href="#">خرید</a>
          </li>
          <li className={Styles.item}>
            <a href="#">فروش</a>
          </li>
          <li className={Styles.item}>
            <a href="#">تماس با ما</a>
          </li>
          <li className={Styles.item}>
            <a href="#">درباره ما</a>
          </li>
        </ul>

        <ul className={Styles.list}>
          <li className={Styles.item}>
            <a href="#">شرایط خدمات</a>
          </li>
          <li className={Styles.item}>
            <a href="#">حریم خصوصی</a>
          </li>
          <li className={Styles.item}>
            <a href="https://github.com/reza-kelidari/ashiooneh">
              مشاهده در گیتهاب
            </a>
          </li>
        </ul>

        <ul className={[Styles.list, Styles.contactUs].join(" ")}>
          <li className={Styles.item}>
            <a href="mailto:contactus@example.com">contactus@example.com</a>
          </li>
          <li className={Styles.item}>
            <a href="tel:02112345678">021-1234 5678</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
