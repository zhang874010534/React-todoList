import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>;
  }
  handleClick = () => {
    this.props.deleteList(this.props.index);
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
