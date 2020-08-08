import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export type LoadingProp = {
  visible: boolean;
};

const loaderContainer = document.getElementById("loading-container")!;

const Loading: React.FC<LoadingProp> = (props) => {
  const thisRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement>();

  //表示時のフォーカス
  useEffect(() => {
    if (props.visible) {
      previousFocusRef.current = document.querySelector(
        ":focus"
      ) as HTMLElement;
      thisRef.current?.focus();
    } else {
      previousFocusRef.current?.focus();
    }
  }, [props.visible]);

  //-------------------------------------------------

  if (!props.visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={style} tabIndex={0} ref={thisRef}></div>,
    loaderContainer
  );
};

const style = {
  position: "fixed" as const,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  cursor: "wait",
};

export { Loading };
