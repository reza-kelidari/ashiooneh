import ContactUs from "./Components/ContactUs";
import Introducing from "./Components/Introducing";
import Timeline from "./Components/Timeline";
import TopBar from "./Components/TopBar";
import Upcoming from "./Components/Upcoming";
import Styles from "./styles.module.scss";

/**
 * This page reders all contents of home page
 *
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <div className={Styles.home}>
      <TopBar />
      <Introducing />
      <Timeline />
      <Upcoming />
      <ContactUs />
    </div>
  );
}
