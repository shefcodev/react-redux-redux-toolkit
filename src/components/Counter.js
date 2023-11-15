import { useSelector, useDispatch } from 'react-redux';

import styles from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatchFn = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatchFn(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatchFn(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatchFn(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatchFn(counterActions.toggleCounter());
  };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={styles.value}>{counter}</div>}
      <div className={styles.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = { toggleCounter: true };
//   }

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {
//     this.setState({ toggleCounter: !this.state.toggleCounter });
//   }

//   render() {
//     return (
//       <main className={styles.counter}>
//         <h1>Redux Counter</h1>
//         {this.state.toggleCounter && (
//           <div className={styles.value}>{this.props.counter}</div>
//         )}
//         <div className={styles.button}>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
