import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  { Template } from 'meteor/templating';
// Blaze is a library that can render templates provided by Meteor
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {
  //Meteor ships with all the UI required to show authentication forms on the screen
      // and we're going to use Blaze to render those forms for us
  componentDidMount() {
    // Render the Blaze accounts form then find the div we just rendered in the 'render' method
      // and place the Blaze accounts form in that div
    // Whenever we render a Blaze template, it returns a reference to the template that was rendered. We set it to this.view
      // The reason we want to save a reference to it, is so we can later remove that template
      // Template.loginButtons is one of the forms shipped with Meteor
      // And we render it to the div with "container" as reference
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount() {
    // Go find the forms we created and destroy them
      // We need to clean up those forms ourselves
      Blaze.remove(this.view);
  }

  render() {
    return (
      <div ref="container"></div>
    );
  }
}

export default Accounts;