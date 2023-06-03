import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
        <div className={
            this.props.isTouched && this.props.error
                ? 'invalid-input'
                : ''
        }>
            <input 
                name={this.props.name}
                placeholder={this.props.placeholder}
                type={this.props.type}
                value={this.props.value}
                onChange={this.props.onChange}
            />
            {this.props.isTouched && this.props.error ? (
                <span className='error'>{this.props.error}</span>
            ) : null }
        </div>
    )
  }
}
