import { ReactNode } from "react";
import Styles from "./styles.module.scss";

export default function Button({ children }: { children: ReactNode }) {
  return <button className={Styles.button}>{children}</button>;
}
