import React, { Component } from 'react';
import Input from '../common/input';
import List from '../common/list';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      todoValue: '',
      todo: [],
    };
  }

  handleInputValueChange(e) {
    this.setState({
      todoValue: e,
    });
  }

  handleAddTodo() {
    this.setState({
      todo: [...this.state.todo, this.state.todoValue],
    });
    this.setState({
      todoValue: '',
    });
  }

  deleteItem(listItem) {
    const array = this.state.todo;
    const index = array.indexOf(listItem);
    array.splice(index, 1);
    this.setState({ todo: array });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <Input
              placeholder="Shto dicka..."
              buttonText="Shto"
              value={this.state.todoValue}
              onChangeInput={e => this.handleInputValueChange(e)}
              onClickInput={() => this.handleAddTodo()}
            />
            <List
              listItems={this.state.todo}
              deleteItem={listItem => this.deleteItem(listItem)}
            />
          </div>
        </div>
      </div>
    );
  }
}
