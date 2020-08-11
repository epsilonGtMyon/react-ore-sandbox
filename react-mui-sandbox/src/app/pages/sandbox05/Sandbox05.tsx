import React, { useState } from "react";
import {
  Modal,
  Button,
  makeStyles,
  createStyles,
  Theme,
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
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
    },
  })
);

const Sandbox05: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const classes = useStyles();

  const body = (
    <div className={classes.container}>
      <div className={classes.frame}>あああ</div>
    </div>
  );

  return (
    <div>
      <div>
        モーダル
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpened(true)}
        >
          open
        </Button>
      </div>
      <Modal open={opened}>{body}</Modal>
    </div>
  );
};

export { Sandbox05 };
