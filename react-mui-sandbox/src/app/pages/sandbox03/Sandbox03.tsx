import React, { useState } from "react";
import { Backdrop, Button, CircularProgress } from "@material-ui/core";

const Sandbox03: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showLoading = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };
  return (
    <div>
      findDOMNodeの警告がでる
      <Button variant="contained" color="primary" onClick={showLoading}>
        open
      </Button>
      <Backdrop open={visible}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export { Sandbox03 };
