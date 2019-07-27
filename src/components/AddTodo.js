import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Grid } from "@material-ui/core";

const AddTodo = ({ onFormSubmit }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (value === "") return null;
    onFormSubmit(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} autoComplete="off">
        <Grid container justify="center" spacing={2}>
          <Grid item sm={7}>
            <TextField
              placeholder="Add Todo"
              value={value}
              onChange={onChange}
              id="todo"
              fullWidth
            />
          </Grid>
          <Grid item sm={2}>
            <Button variant="contained" color="secondary" type="submit">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddTodo;
