import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Card from "./components/Card/Card";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import RandomBtn from "./components/RandomBtn/RandomBtn";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    tenJokes: [],
    randomJoke: []
  };
  componentDidMount = () => {
    fetch("https://official-joke-api.herokuapp.com/random_ten")
      .then(res => res.json())
      .then(data => this.setState({ tenJokes: data }));
  };

  getRandom = () => {
    fetch("https://official-joke-api.herokuapp.com/random_joke")
      .then(res => res.json())
      .then(data => this.setState({ randomJoke: data }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <NavBar />
        <RandomBtn getRandom={this.getRandom} />
        <Paper className={classes.root} elevation={1}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              {this.state.randomJoke.length === 0 ? (
                this.state.tenJokes.map(joke => {
                  return (
                    <Card
                      key={joke.id}
                      type={joke.type}
                      setup={joke.setup}
                      punchline={joke.punchline}
                    />
                  );
                })
              ) : (
                <Card
                  key={this.state.randomJoke.id}
                  type={this.state.randomJoke.type}
                  setup={this.state.randomJoke.setup}
                  punchline={this.state.randomJoke.punchline}
                />
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);
