import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 40,
    background: "#fff"
  },
  mainTitle: {
    padding: 20,
    color: "#2E86AB",
    fontWeight: 600
  }
}));

const App = () => {
  const [todo, setTodo] = useState([]);

  const onSubmit = value => {
    setTodo([...todo, value]);
  };

  const onDelete = key => {
    setTodo(todo.filter((item, index) => index !== key));
  };

  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="sm">
        <Grid>
          <Typography variant="h4" align="center" className={classes.mainTitle}>
            Todos
          </Typography>
          <Paper className={classes.paper}>
            <AddTodo onFormSubmit={onSubmit} />
            <Todos todo={todo} onDelete={onDelete} />
          </Paper>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
