import React, { Component } from 'react';

export default class List extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.listItems.map((listItem, index) => (
            <li key={`list-Item${index}`} className="list-group-item list-group-item-success" >
              {listItem}
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.props.deleteItem(listItem)}
              >
                Fshi
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
