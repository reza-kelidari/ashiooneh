import Bed from "../../../../Icons/Bed";
import Size from "../../../../Icons/Size";
import { House } from "../../../../Utils/types";
import UpcomingList from "../../../../Utils/Upcoming";
import Styles from "./styles.module.scss";

/**
 * This page renders a list of houses for Home page
 *
 * @returns {JSX.Element}
 */
export default function Upcoming(): JSX.Element {
  return (
    <div className={Styles.upcoming}>
      <h1 className={Styles.title}>جدید ترین آگهی ها</h1>

      <div className={Styles.list}>
        {UpcomingList.map((house, index) => (
          <HouseItem key={index} details={house} />
        ))}
      </div>
    </div>
  );
}

/**
 * This component renders an element that shows a house
 * details, for a list in Upcoming component
 *
 * @returns {JSX.Element}
 */
function HouseItem({ details }: { details: House }): JSX.Element {
  return (
    <div className={Styles.house}>
      <img src={details.image} alt={details.name} className={Styles.image} />

      <div className={Styles.detail}>
        <h3 className={Styles.title}>{details.name}</h3>

        <div className={Styles.items}>
          <div className={Styles.item}>
            <Bed />
            <span>{details.rooms} خوابه</span>
          </div>

          <div className={Styles.item}>
            <Size />
            <span>{details.size} متر</span>
          </div>
        </div>

        <div className={Styles.priceTag}>
          <span className={Styles.title}>شروع قیمت از:</span>

          <span className={Styles.container}>
            <span className={Styles.price}>{details.price}</span>
            <span className={Styles.desc}>تومان</span>
          </span>
        </div>
      </div>
    </div>
  );
}
