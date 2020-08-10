import React, {Component} from 'react';


class app extends Component{

  state = {
    count: 0
  }

  countUp = () => {
    this.setState(
      {count:this.state.count + 1}
    )

  }
  countDown = () => {
    this.setState(
      {count:this.state.count -1 }
    )
  }
  render () {
    return (
      <div className='app'>
      <p>the current state is:</p>
      <h4>{this.state.count}</h4>
      <button onClick={this.countUp}>Count up</button>
      <button onClick={this.countDown}>count Down</button>

      </div>
    )
  }
}

export default app