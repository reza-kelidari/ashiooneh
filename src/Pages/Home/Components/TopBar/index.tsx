import { useState } from "react";
import Styles from "./styles.module.scss";
import Button from "../../../../Components/Button";

/**
 * This components renders a banner, a header, and a form
 * for `Home page`
 *
 * @returns {JSX.Element}
 */
export default function TopBar(): JSX.Element {
  /**
   * This state declares which form should shown, buy or sell
   */
  const [active, setActive] = useState(0);

  return (
    <div className={Styles.topBar}>
      <img src="/banner.jpg" alt="Banner" className={Styles.banner} />

      <div className={Styles.titleBar}>
        <h1 className={Styles.title}>کمکت میکنیم</h1>
        <h1 className={Styles.title}>خونه ی رویایی تو پیدا کنی</h1>
        <h3 className={Styles.subTitle}>با بهترین قیمت، و کمترین کمیسیون</h3>
      </div>

      <form action="#" className={Styles.form}>
        <div className={Styles.types}>
          <span
            className={[Styles.type, active === 0 ? Styles.active : ""].join(
              " "
            )}
            onClick={() => setActive(0)}
          >
            خرید
          </span>

          <span
            className={[Styles.type, active === 1 ? Styles.active : ""].join(
              " "
            )}
            onClick={() => setActive(1)}
          >
            فروش
          </span>
        </div>
        {active === 0 ? (
          <div className={Styles.container}>
            <div className={Styles.properties}>
              <div className={Styles.property}>
                <label htmlFor="hood">محله</label>
                <input type="text" id="hood" placeholder="سعادت آباد" />
              </div>

              <div className={Styles.property}>
                <label htmlFor="type">نوع</label>
                <select id="type" className={Styles.type}>
                  <option disabled>یک مورد انتخاب کن</option>
                  <option value="apartment">آپارتمان</option>
                  <option value="house">ویلایی</option>
                  <option value="villa">باغ ویلا</option>
                  <option value="office">اداری</option>
                </select>
              </div>

              <div className={Styles.property}>
                <label htmlFor="min">حداقل قیمت</label>
                <input
                  type="number"
                  id="min"
                  min={500000000}
                  placeholder="500,000,000"
                  pattern="\d*"
                />
              </div>

              <div className={Styles.property}>
                <label htmlFor="max">حداکثر قیمت</label>
                <input
                  type="number"
                  id="max"
                  min={500000000}
                  placeholder="1,000,000,000"
                  pattern="\d*"
                />
              </div>
            </div>

            <Button type="submit">جستجو</Button>
          </div>
        ) : (
          <div className={Styles.container}>
            <div className={Styles.properties}>
              <div className={Styles.property}>
                <label htmlFor="hood">محله</label>
                <input type="text" id="hood" placeholder="سعادت آباد" />
              </div>

              <div className={Styles.property}>
                <label htmlFor="type">نوع</label>
                <select id="type" className={Styles.type}>
                  <option disabled>یک مورد انتخاب کن</option>
                  <option value="apartment">آپارتمان</option>
                  <option value="house">ویلایی</option>
                  <option value="villa">باغ ویلا</option>
                  <option value="office">اداری</option>
                </select>
              </div>

              <div className={Styles.property}>
                <label htmlFor="min">متراژ</label>
                <input
                  type="number"
                  id="size"
                  placeholder="70"
                  pattern="\d*"
                  min={30}
                  max={200}
                />
              </div>

              <div className={Styles.property}>
                <label htmlFor="max">تعداد اتاق خواب</label>
                <input
                  type="number"
                  id="rooms"
                  placeholder="4"
                  pattern="\d*"
                  min={0}
                  max={7}
                />
              </div>
            </div>

            <Button type="submit">پر کردن فرم</Button>
          </div>
        )}
      </form>
    </div>
  );
}
