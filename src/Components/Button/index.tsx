import Styles from "./styles.module.scss";

export default function Button(props: any) {
  const { children } = props;

  return (
    <button {...props} className={Styles.button}>
      {children}
    </button>
  );
}
