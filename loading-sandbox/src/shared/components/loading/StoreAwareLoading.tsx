import React from "react";
import { useSelector } from "react-redux";
import { Loading } from "./Loading";
import { isVisible } from "../../../app/store/loading/loadingSlice";

const StoreAwareLoading: React.FC = () => {
  const visible = useSelector(isVisible);
  return <Loading visible={visible} />;
};

export { StoreAwareLoading };
