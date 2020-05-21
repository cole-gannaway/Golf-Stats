import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';

import ChipShotsInput from '../ChipShotsInput/ChipShotsInput';
import SandShotsInput from '../SandShotsInput/SandShotsInput';
import PenaltiesInput from '../PenaltiesInput/PenaltiesInput';

class OptionalAdvancedInput extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      open: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({ open: !this.state.open });
  }
  public render() {
    return <List component="div" disablePadding>
      <ListItem ><ChipShotsInput></ChipShotsInput></ListItem>
      <ListItem><SandShotsInput></SandShotsInput></ListItem>
      <ListItem><PenaltiesInput></PenaltiesInput></ListItem>
    </List>;
  }
}

export default OptionalAdvancedInput;
