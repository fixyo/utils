// React 中 setState 什么时候是同步的，什么时候是异步的？


// 这里所说的同步异步， 并不是真正的同步异步， 它还是同步执行的。
// 这里的异步指的是多个state会合成到一起进行批量更新。


// 在React中，如果是由React引发的事件处理（比如通过onClick引发的事件处理），
// 调用setState不会同步更新this.state，除此之外的setState调用会同步执行this.state 。
// 所谓“除此之外”，指的是绕过React通过addEventListener直接添加的事件处理函数，
// 还有通过setTimeout/setInterval产生的异步调用。


// 原因： 在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state
// 还是放到队列中回头再说，而isBatchingUpdates默认是false，也就表示setState会同步更新this.state，
// 但是，有一个函数batchedUpdates，这个函数会把isBatchingUpdates修改为true，
// 而当React在调用事件处理函数之前就会调用这个batchedUpdates，造成的后果，
// 就是由React控制的事件处理过程setState不会同步更新this.state。


// 注意： setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，
// 只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，
// 形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 
// 中的callback拿到更新后的结果。


// state update maybe asynchronous 
// second form of setState
// state updates are mergeed 
this.setState((state, props) => {
  console.log(state, props)
  return state.counter + props.increment 
})


class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log  ---> 0

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log  ---> 0 两次setState合并为一次, 执行后结果为1

    setTimeout(() => {  
      // setTimeout 中的代码，触发时 isBatchingUpdates 为 false，所以能够直接进行更新，所以连着输出 2，3。
      
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log ---> 2 

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log ---> 3 
    }, 0);
  }

  render() {
    return null;
  }
};


