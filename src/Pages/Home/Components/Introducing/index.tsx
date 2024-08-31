import Styles from "./styles.module.scss";

/**
 * This component renders a movie element and
 * some descriptions for Home page
 *
 * @returns {JSX.Element}
 */
export default function Introducing(): JSX.Element {
  return (
    <div className={Styles.intro}>
      <div className={Styles.movie}>
        <img src="/intro.jpg" alt="Intro" className={Styles.banner} />

        <Play />
      </div>

      <div className={Styles.details}>
        <h3 className={Styles.title}>شفاف، سریع، مطمئن</h3>

        <p className={Styles.desc}>
          در این پلتفرم بدون نیاز به مراجعه به مشاور املاک، میتونی خونه انتخاب
          کنی، قرار ملاقات امن بزاری، و در نهایت اگه خونه رو پسندیدی در دفتر
          آشیونه خونه رو با کمترین کمیسیون معامله کنی.
        </p>
      </div>
    </div>
  );
}

/**
 * This component renders a play button
 *
 * @returns {JSX.Element}
 */
function Play(): JSX.Element {
  return (
    <a href="#" className={Styles.play}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="104"
        viewBox="0 0 104 104"
      >
        <g id="Play" transform="translate(-1468 -1053)">
          <path
            id="Path_24"
            data-name="Path 24"
            d="M52,0A52,52,0,1,1,0,52,52,52,0,0,1,52,0Z"
            transform="translate(1468 1053)"
            fill="#fff"
          />
          <path
            id="Path_23"
            data-name="Path 23"
            d="M17,0,34,30H0Z"
            transform="translate(1539 1088) rotate(90)"
            fill="#16a249"
          />
        </g>
      </svg>
    </a>
  );
}
