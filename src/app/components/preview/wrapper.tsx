import type { HTMLAttributes } from "react";
import clsx from "@/lib/clsx";

type wrapperProps = HTMLAttributes<HTMLDivElement>;

function Wrapper(props: wrapperProps) {
  return (
    <div
      {...props}
      className={clsx(
        "rounded-lg bg-black/20 p-4 border prose-no-margin",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;
