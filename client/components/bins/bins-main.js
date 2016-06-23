import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';
import BinsEditor from './bins-editor';

class BinsMain extends Component {
  render() {
    if (!this.props.bin) { return <div>Loading...</div> };
    
    return (
      <BinsEditor bin={this.props.bin} />
    );
  }
}

export default createContainer((props) => {
  const { binId } = props.params;
  Meteor.subscribe('bins');

  return { bin: Bins.findOne(binId) };
}, BinsMain);