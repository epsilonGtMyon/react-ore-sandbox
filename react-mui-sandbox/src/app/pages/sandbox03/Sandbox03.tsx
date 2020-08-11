import React, { useState } from "react";
import {
  Backdrop,
  Button,
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
  Modal,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    },
    frame: {
      position: "relative",
    },
  })
);

const Loading: React.FC<{ opened: boolean }> = (props) => {
  const classes = useStyles();
  return (
    <Modal open={props.opened}>
      <div className={classes.container}>
        <div className={classes.frame}>
          <CircularProgress color="inherit" />
        </div>
      </div>
    </Modal>
  );
};

const Sandbox03: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const showLoading2 = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" onClick={showLoading}>
          open
        </Button>
        findDOMNodeの警告がでる、というかz-indexもおかしい
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={showLoading2}>
          open2
        </Button>
        でない
      </div>
      <Backdrop open={visible}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Loading opened={loading} />
    </div>
  );
};

export { Sandbox03 };
