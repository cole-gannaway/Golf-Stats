import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class ChipShotsInput extends Component<any, any> {
  public render() {
    return <TextField label="Chip Shots" type="number" inputProps={{ pattern: "[0-9*]" }} />;
  }
}

export default ChipShotsInput;
