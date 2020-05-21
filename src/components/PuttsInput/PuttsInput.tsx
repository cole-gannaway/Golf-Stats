import React, { Component } from 'react';
import { TextField } from '@material-ui/core';


class PuttsInput extends Component<any, any> {
  public render() {
    return <TextField label="Putts" type="number" inputProps={{ pattern: "[0-9*]" }} />;
  }
}

export default PuttsInput;
