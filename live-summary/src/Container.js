import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';
export class Container extends Component {
state = { isShown: false };
render() {
   return (
    <TriggerButton
    triggerText={this.props.triggerText}
    />
{this.state.isShown ? (<Modal/>) : null}
);
 }
}
export default Container;