import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class SandShotsInput extends Component<any, any> {
  public render() {
    return <TextField label="Sand Shots" type="number" inputProps={{ pattern: "[0-9*]" }} />;
  }
}

export default SandShotsInput;
