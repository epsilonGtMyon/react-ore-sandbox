import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Loading.css";

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
    <div className="loading" tabIndex={0} ref={thisRef}>
      <div className="loading-spinner"></div>
    </div>,
    loaderContainer
  );
};

export { Loading };
