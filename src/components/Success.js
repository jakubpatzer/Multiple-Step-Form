import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success'/>
          <h1>Submission success!</h1>
          <p>An email with confirmation has bee sent.</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success
