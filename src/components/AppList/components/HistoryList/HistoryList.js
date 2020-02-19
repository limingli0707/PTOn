import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';
import { rgbToHex } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(2),
      marginLeft: '25%'
    }
  }));

const History = props => {
    const classes = useStyles();
    return (
   
  <tr>
    <td>{props.history.module}</td>
    <td>{props.history.description}</td>
    <td>{props.history.date}</td>
  </tr>
);
}

export default class HistoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {histories: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/histories/')
      .then(response => {
        this.setState({ histories: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  fetchHistoryList = props => {
    return this.state.histories.map(currenthistory => {
      return <History history={currenthistory}  key={currenthistory._id}/>;
    })
  }

  render() {
    return (
      <div style={{marginLeft:'15%'}}>
          <Chip size="medium" label="Activity Histories" />
        <table className="table" width="100%" style={{background: "rgba(255, 255, 255, 0.3)", padding: "15px"}}>
          <thead className="thead-light">
            <tr>
              <th width="10%">Module</th>
              <th width="30%">Description</th>
              <th width="40%">Date</th>
            </tr>
          </thead>
          <tbody>
            { this.fetchHistoryList() }
          </tbody>
        </table>
      </div>
    )
  }
}