import React, { Component } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
class HoleSelectInput extends Component<any, { holeNumber: number }> {
  constructor(props: any) {
    super(props);
    this.state = {
      holeNumber: 1
    }
    this.handleBackwardsClick = this.handleBackwardsClick.bind(this);
    this.handleForwardsClick = this.handleForwardsClick.bind(this);
  }
  handleBackwardsClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ holeNumber: this.state.holeNumber - 1 });
  }
  handleForwardsClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({ holeNumber: this.state.holeNumber + 1 });
  }
  public render() {
    return <div>
      <IconButton onClick={this.handleBackwardsClick}>
        <ArrowBackIcon></ArrowBackIcon>
      </IconButton>
      <TextField label="Hole" type="number" inputProps={{ pattern: "[0-9*]", min: "1" }} value={this.state.holeNumber} />
      <IconButton onClick={this.handleForwardsClick}>
        <ArrowForwardIcon></ArrowForwardIcon>
      </IconButton>
    </div>;
  }
}

export default HoleSelectInput;
