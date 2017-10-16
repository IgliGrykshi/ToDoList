import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={event => this.props.onChangeInput(event.target.value)}
        />
        <span className="input-group-btn">
          <button
            onClick={this.props.onClickInput}
            className="btn btn-primary"
            type="button"
          >
            {this.props.buttonText}
          </button>
        </span>
      </div>
    );
  }
}
