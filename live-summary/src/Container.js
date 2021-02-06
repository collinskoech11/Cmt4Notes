import React, { Component } from 'react';
import { Modal } from '../Modal';
import TriggerButton from '../TriggerButton';
export class Container extends Component {
state = { isShown: false };
render() {
return (
<React.Fragment>
<TriggerButton
  showModal={this.showModal}
  buttonRef={(n) => (this.TriggerButton = n)}
  triggerText={this.props.triggerText}
/>
{this.state.isShown ? (
  <Modal
    onSubmit={this.props.onSubmit}
    modalRef={(n) => (this.modal = n)}
    buttonRef={(n) => (this.closeButton = n)} 
    closeModal={this.closeModal}
    onKeyDown={this.onKeyDown}
    onClickOutside={this.onClickOutside}
  />
  ) : null
 }
</React.Fragment>
  );
 }
}
export default Container;