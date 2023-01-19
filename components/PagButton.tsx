import cn from "classnames";
import styles from "./SearchResults.module.css";

type PagButtonProps = {
  pageIndex: number;
  isActive: boolean;
  onClick: () => void;
};

export default function PagButton(props: PagButtonProps) {
  const { pageIndex, isActive, onClick } = props;

  return (
    <button
      className={cn("roundButton", styles.pagElement, styles.pageSwitcher, { [styles.activeSwitcher]: isActive })}
      onClick={() => onClick()}
    >
      {pageIndex}
    </button>
  );
}
