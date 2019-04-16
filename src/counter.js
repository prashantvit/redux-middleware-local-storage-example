import React from "react";
import * as actions from "./actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export const Counter = props => {
  const { counter, increment, decrement } = props;
  return (
    <React.Fragment>
      <div> Counter value - {counter}</div>
      <button onClick={increment}> Increment</button>
      <button onClick={decrement}> Decrement</button>
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
      decrement: actions.decrement
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
