import React, { useState } from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

const Sandbox04: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const handleClose = (...args: any[]) => {
    setVisible(false);
  };
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setVisible(true)}
      >
        open
      </Button>
      <Dialog
        open={visible}
        onClose={handleClose}
        disableBackdropClick={true}
        disableEscapeKeyDown={true}
      >
        <DialogTitle>aaa</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText>
            あいうえお かきくけこ よろしいか？
            あああああああああああああああああああああああああ
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { Sandbox04 };
