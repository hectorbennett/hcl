import { ElementType, forwardRef } from "react";
import styles from "./Scrollable.module.scss";

export interface ScrollableBaseProps {
  scroll?: "x" | "y" | "both";
  className?: string;
  nodeType?: ElementType;
}

const ScrollableBase = forwardRef(
  (
    {
      scroll = "y",
      nodeType = "div",
      className,
      ...props
    }: ScrollableBaseProps,
    ref
  ) => {
    var classNames = [styles.scrollable, styles[scroll]];
    if (className) {
      classNames.push(className);
    }
    const NodeType = nodeType;
    return <NodeType ref={ref} {...props} className={classNames.join(" ")} />;
  }
);

export const Scrollable = {
  div: ScrollableBase,
  textarea: forwardRef((props, ref) => {
    return <ScrollableBase ref={ref} nodeType="textarea" {...props} />;
  }),
};

