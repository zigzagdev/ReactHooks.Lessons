import React, {Component, useEffect} from 'react'

class ClassCounterOne extends Component{
    constructor(props) {
        super(props)
        this.state = {
          count: 0,
          name: ''
        }
    }

  componentDidMount() {
   document.title = `Clicked ${this.state.count} times`
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.count !== this.state.count) {
     console.log('Updating document title')
   document.title = `Clicked ${this.state.count} times`
   }
  }

  render() {
   return (
    <div>
     <input type="text" value={this.state.name}
      onChange={e => {
       this.setState({name: e.target.value})
      }}/>
     <button onClick={() => this.setState({count: this.state.count + 1 })}>
       Click {this.state.count} times
     </button>
    </div>
   )
  }
}

export default ClassCounterOne

// useEffect()を利用することで、関数の呼び出しを行うことができる。(簡単に言うと、レンダー前とレンダー後とで同じコード
// を二度書かずに済む。上記の例で言うなら{document.title = `Clicked ${this.state.count} times`}に該当する).
// **因みにClassCounterOneとHookCounterOneファイルは全く同じ内容のものとなっている。
// またuseEffectに関しては、毎度レンダー後に呼ばれる為、心配ご無用。(DOMの構成自体にこれと言った影響はないと思われる)