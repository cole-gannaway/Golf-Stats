import React, { Component } from 'react';
import { Database } from '../../common/implementation/Database';
import FairwayInput from '../FairwayInput/FairwayInput';
import GirInput from '../GirInput/GirInput';
import PuttsInput from '../PuttsInput/PuttsInput';
import ScoreInput from '../ScoreInput/ScoreInput';
import OptionalAdvancedInput from '../OptionalAdvancedInput/OptionalAdvancedInput';
import { List, ListItem, ListItemText, Collapse, Card, CardContent } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HoleSelectInput from '../HoleSelectInput/HoleSelectInput';

class Main extends Component<any, { db: any, isAdvancedOptionsExpanded: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      db: new Database(),
      isAdvancedOptionsExpanded: false
    }
    this.addHole = this.addHole.bind(this);
    this.handleAdvancedOptionsClick = this.handleAdvancedOptionsClick.bind(this);
  }
  public render() {
    return <div>
      <Card>
        <CardContent>
          <List component="div" className="center-align">
            <ListItem><HoleSelectInput></HoleSelectInput></ListItem>
            <ListItem><ScoreInput></ScoreInput></ListItem>
            <ListItem><FairwayInput></FairwayInput></ListItem>
            <ListItem><GirInput></GirInput></ListItem>
            <ListItem><PuttsInput></PuttsInput></ListItem>
            {/* Advanced */}
            <ListItem button onClick={this.handleAdvancedOptionsClick}>
              <ListItemText primary="More" />
              {this.state.isAdvancedOptionsExpanded ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.isAdvancedOptionsExpanded} timeout="auto" unmountOnExit>
              <OptionalAdvancedInput></OptionalAdvancedInput>
            </Collapse>
          </List>
        </CardContent>
      </Card>
    </div>;
  }
  addHole() {
    this.state.db();

  }
  handleAdvancedOptionsClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({ isAdvancedOptionsExpanded: !this.state.isAdvancedOptionsExpanded })
  }
}

export default Main;
