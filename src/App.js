import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: ['学英语', '写代码']
    };
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
              <div>
                <TodoItem
                  content={item}
                  index={index}
                  deleteList={this.deleteList}
                ></TodoItem>
                {/* <li key={index} data-index={index} onClick={this.deleteList}>
                  {item}
                </li> */}
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleInputChange(e) {
    this.setState(() => {
      return {
        inputValue: this.input.value
      };
    });
  }
  handleClick = () => {
    this.setState(
      (state) => {
        return {
          list: [...state.list, state.inputValue]
        };
      },
      () => {
        console.log(this.ul.querySelectorAll('div').length);
      }
    );
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // });
  };
  deleteList = (index) => {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  };
}
export default App;
