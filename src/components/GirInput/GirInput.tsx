import React, { Component } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

class GirInput extends Component<any, { checked: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false
    }
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  public render() {
    return <div>
      <FormControlLabel
        control={<Switch color='primary' checked={this.state.checked} onChange={this.toggleChecked} />}
        label="GIR"
        color='secondary'
      />
    </div>;
  }
  private toggleChecked(event: React.ChangeEvent<HTMLInputElement>, checked: boolean) {
    this.setState({ checked: checked });
  }
}

export default GirInput;
