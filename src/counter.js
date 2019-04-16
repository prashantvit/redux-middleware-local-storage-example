import React from "react";
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export const Counter = props => {
  const { counter, increment, decrement, incrementAsync } = props;
  return (
    <React.Fragment>
      <div> Counter value - {counter}</div>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
      <button onClick={incrementAsync}> Increment Asynchornously</button>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: actions.increment,
      decrement: actions.decrement,
      incrementAsync: actions.incrementAfter5Seconds
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
