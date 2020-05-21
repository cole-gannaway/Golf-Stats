import React, { Component } from 'react';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { FormControl, RadioGroup, FormControlLabel, FormLabel, Radio } from '@material-ui/core';

class FairwayInput extends Component<any, { value: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 'CENTER'
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>, value: string) {
    this.setState({ value: value });
  }
  public render() {
    return <div>
      <FormControl component="fieldset">
        <FormLabel component="label">Fairway</FormLabel>
        <RadioGroup row aria-label="position" name="position" defaultValue="top">
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label={<UndoIcon></UndoIcon>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="2"
            control={<Radio color="primary" />}
            label={<ArrowUpwardIcon></ArrowUpwardIcon>}
            labelPlacement="bottom"
          />
          <FormControlLabel
            value="3"
            control={<Radio color="primary" />}
            label={<RedoIcon></RedoIcon>}
            labelPlacement="bottom"
          />
        </RadioGroup>
      </FormControl>
    </div>;
  }
}

export default FairwayInput;
