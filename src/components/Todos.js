import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, ListItemSecondaryAction } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: 30
  },
  todo: {
    wordWrap: "break-word"
  },
  icon: {
    margin: theme.spacing(1),
    cursor: "pointer"
  },
  list: {
    marginTop: 20
  }
}));

const Todos = ({ todo, onDelete }) => {
  const classes = useStyles();
  return (
    <div>
      {todo.length <= 0 ? (
        <Typography align="center" className={classes.title}>
          No Current Tasks
        </Typography>
      ) : (
        <List className={classes.list}>
          {todo.map((item, index) => {
            return (
              <ListItem key={index} alignItems="flex-start">
                <ListItemText className={classes.todo}>{item}</ListItemText>
                <ListItemSecondaryAction>
                  <DeleteForeverIcon
                    className={classes.icon}
                    onClick={() => onDelete(index)}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default Todos;
