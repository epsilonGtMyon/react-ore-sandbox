import React from "react";
import { List, ListItem, Divider, ListItemText } from "@material-ui/core";

type DummyRecord = {
  title: string;
  detail?: string;
};

const records: DummyRecord[] = [
  {
    title: "リストアイテム１",
    detail: "詳細",
  },
  {
    title: "リストアイテム２",
  },
  {
    title: "リストアイテム３",
    detail: "あーいやこーいやそれこれどれだよ",
  },
];

type Sandbox02RecordProps = {
  record: DummyRecord;
  clicked: (record: DummyRecord) => void;
};

const Sandbox02Record: React.FC<Sandbox02RecordProps> = (props) => (
  <React.Fragment>
    <ListItem button onClick={(e) => props.clicked(props.record)}>
      <ListItemText
        primary={props.record.title}
        secondary={props.record.detail}
      />
    </ListItem>
    <Divider />
  </React.Fragment>
);

const Sandbox02: React.FC = () => {
  const handleClick = (record: DummyRecord) => {
    console.log({ record });
  };

  return (
    <div>
      List
      <div>
        <List>
          {records.map((record) => (
            <Sandbox02Record
              key={record.title}
              record={record}
              clicked={(record) => handleClick(record)}
            />
          ))}
        </List>
      </div>
    </div>
  );
};

export { Sandbox02 };
