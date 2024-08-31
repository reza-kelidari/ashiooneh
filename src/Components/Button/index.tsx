import { ReactNode } from "react";
import Styles from "./styles.module.scss";

/**
 * This comopent renders a customized button
 * 
 * @param children is content that will be shown in
 * the button
 * @returns {JSX.Element}
 */
export default function Button({
  children,
  type,
}: {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}): JSX.Element {
  return (
    <button type={type} className={Styles.button}>
      {children}
    </button>
  );
}
