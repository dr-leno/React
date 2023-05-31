import React, { Component } from 'react'

export default class Notification extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.onCloseNotification();
        }, 2000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
  render() {
    return (
      <div className='notification'>Successful operation</div>
    )
  }
}
