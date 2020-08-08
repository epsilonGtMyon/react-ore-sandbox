import React from "react";
import { useDispatch } from "react-redux";
import { show, hide } from "../../store/loading/loadingSlice";

const Sandbox01: React.FC = () => {
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch(show());
    setTimeout(() => {
      dispatch(hide());
    }, 1000);
  };

  return (
    <div>
      Sandbox01
      <hr />
      <div>
        <button type="button" onClick={showLoading}>
          クルクルをだす
        </button>
      </div>
    </div>
  );
};

export { Sandbox01 };
