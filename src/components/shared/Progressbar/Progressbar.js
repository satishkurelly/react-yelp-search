/* The purpose of the Business component is to represent how
** a business ( a restaurant) in Ravenous will be formatted and styles. 
*/
import React from 'react';
import './Progressbar.css';
import Progressbar from 'react-bootstrap/ProgressBar';

class Progress extends React.Component {
  render(){
    
    // const {indicator} = this.props;

    return (
      <Progressbar  animated now={this.props.indicator}/>
    );
  }
}

export default Progress;
