import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  ButtonGroup,
} from "@material-ui/core";

export default function SearchField({ onChange }: any) {
  const [text, setText] = React.useState("");
  const getText = (event: any) => {
    if (event && event.target) {
      setText(event.target.value);
    }
    onClick();
  };
  const onClick = () => onChange(text);
  return (
    <>
      <ButtonGroup
        size="large"
        aria-label="large outlined primary split button"
        fullWidth={true}
      >
        <TextField
          id="outlined-basic"
          label="Search News"
          fullWidth
          onChange={getText}
        />
        <Button
          color="primary"
          size="small"
          aria-label="select merge strategy"
          aria-haspopup="menu"
          style={{ width: "30%" }}
          onClick={onClick}
        >
          Search
        </Button>
      </ButtonGroup>
    </>
  );
}
