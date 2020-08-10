import React, { useState } from "react";
import { Button, Container, Icon, TextField, Divider } from "@material-ui/core";

const Sandbox01: React.FC = () => {
  const [value01, setValue01] = useState("");

  const handleValue01 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue01(e.target.value);
  };
  return (
    <div>
      Sandbox01
      <Button
        variant="contained"
        color="primary"
        startIcon={<Icon>shopping_cart</Icon>}
      >
        ボタン
      </Button>
      <Container maxWidth="sm">
        <TextField value={value01} onChange={handleValue01} label="value01" />
      </Container>
      <Divider />
    </div>
  );
};

export { Sandbox01 };
