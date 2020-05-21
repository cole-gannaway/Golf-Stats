import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class PenaltiesInput extends Component<any, any> {
  public render() {
    return <TextField label="Penalty Strokes" type="number" inputProps={{ pattern: "[0-9*]" }} />;
  }
}

export default PenaltiesInput;
