import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from './store/index.js';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>;
  }
  handleClick = () => {
    const action = {
      type: 'delete_todoList_item',
      index: this.props.index
    };
    store.dispatch(action);
  };
}
TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  deleteList: PropTypes.func,
  index: PropTypes.number
};

TodoItem.defaultProps = {
  content: 'default message'
};
export default TodoItem;
