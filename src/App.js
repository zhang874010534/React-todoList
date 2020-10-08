import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import TodoItem2 from './TodoItem2';
import './App.css';
import axios from 'axios';

import { Input } from 'antd';
import 'antd/dist/antd.css';

import store from './store/index.js';
import { changeInputAction } from './store/actionCreator';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate');
    return true;
  }
  componentDidMount() {
    // 注册监听器
    store.subscribe(() => {
      this.setState(store.getState());
    });
    axios
      .get('/api/todoList')
      .then((res) => {
        this.setState(() => {
          return {
            list: res.data
          };
        });
      })
      .catch(() => {});
  }
  render(h) {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
          ref={(input) => {
            this.input = input;
          }}
        />
        <button onClick={this.handleClick}>提交</button>
        <ul
          ref={(ul) => {
            this.ul = ul;
          }}
        >
          {this.state.list.map((item, index) => {
            return (
              <div key={index}>
                <TodoItem content={item} index={index}></TodoItem>
                {/* <li key={index} data-index={index} onClick={this.deleteList}>
                  {item}
                </li> */}
                <TodoItem2 content={item}></TodoItem2>
              </div>
            );
          })}
        </ul>
        {/* 动画 */}
        <button
          onClick={this.toggleClass}
          className={this.state.buttonFlag ? 'show' : 'hide'}
        >
          toggle
        </button>
        <Input placeholder="basic usage"></Input>
      </Fragment>
    );
  }
  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // };
    store.dispatch(changeInputAction(e.target.value));
  }
  handleClick = () => {
    const action = {
      type: 'add_todoList_item'
    };
    store.dispatch(action);
  };
  toggleClass = () => {
    this.setState({
      buttonFlag: !this.state.buttonFlag
    });
  };
}
export default App;
