import Button from "../../../../Components/Button";
import Styles from "./styles.module.scss";

export default function ContactUs() {
  return (
    <div className={Styles.contactUs}>
      <h1 className={Styles.title}>سوالی داری؟</h1>
      <h3 className={Styles.subTitle}>زنگ بزن بپرس</h3>
      <Button>تماس با ما</Button>
    </div>
  );
}
