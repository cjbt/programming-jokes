import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function ContainedButtons(props) {
  const { classes, getRandom } = props;
  return (
    <div>
      <Button
        onClick={getRandom}
        variant="contained"
        color="secondary"
        className={classes.button}
      >
        Get Random
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContainedButtons);
