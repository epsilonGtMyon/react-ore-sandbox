import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Icon, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme)=>createStyles({
  container: {
    position: "fixed",
    bottom: 0,
    left:0,
    right:0,
  }
}))

const Sandbox06: React.FC = () => {
  const [currentNav, setCurrentNav] = useState("");

  const classes = useStyle();

  const handle = (event: React.ChangeEvent<{}>, newValue: string) => {
    setCurrentNav(newValue);
  };
  return (
    <div>
      {currentNav}
      <BottomNavigation className={classes.container} value={currentNav} onChange={handle} showLabels>
        <BottomNavigationAction label="value01" value="1" icon={<Icon>delete</Icon>}/>
        <BottomNavigationAction label="value02" value="2" icon={<Icon>send</Icon>}/>
      </BottomNavigation>
    </div>
  );
};

export { Sandbox06 };
