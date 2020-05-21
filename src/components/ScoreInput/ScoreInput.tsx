import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class ScoreInput extends Component<any, any> {
  public render() {
    return <TextField label="Score" type="number" inputProps={{ pattern: "[0-9*]" }} />;
  }
}

export default ScoreInput;
