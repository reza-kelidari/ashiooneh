import TopBar from "./Components/TopBar";
import Styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={Styles.home}>
      <TopBar />
    </div>
  );
}
