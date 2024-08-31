import Styles from "./styles.module.scss";

/**
 * This component renders a timeline for Home page
 * @returns {JSX.Element}
 */
export default function Timeline(): JSX.Element {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>مراحل خریدن خونه ی رویاییت</h1>

      <div className={Styles.timeline}>
        <span className={Styles.line}></span>

        <div className={Styles.step}>
          <h3 className={Styles.title}>یه خونه انتخاب کن</h3>
          <p className={Styles.desc}>
            در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه بخری
          </p>
        </div>

        <div className={Styles.step}>
          <h3 className={Styles.title}>همینجا قرار بزار</h3>
          <p className={Styles.desc}>
            در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه بخری
          </p>
        </div>

        <div className={Styles.step}>
          <h3 className={Styles.title}>نتیجه رو تعیین کن</h3>
          <p className={Styles.desc}>
            در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه بخری
          </p>
        </div>

        <div className={Styles.step}>
          <h3 className={Styles.title}>بیاین دفتر آشیونه</h3>
          <p className={Styles.desc}>
            در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه بخری
          </p>
        </div>
      </div>
    </div>
  );
}
