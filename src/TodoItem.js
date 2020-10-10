import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from './store/index.js';
import axios from 'axios';
import { getTodoList } from './store/actionCreator';
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
  componentDidMount() {
    // const action = getTodoList();
    // const action={}
    // 当把action发给store的时候action是会自动执行的
    // store.dispatch(action);
    // axios.get('/list.json').then((res) => {
    //   console.log(res);
    // });
    const action = {
      type: 'get_init_list'
    };
    store.dispatch(action);
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
