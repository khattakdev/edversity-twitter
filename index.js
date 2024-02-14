const redux = require("redux");

const COUNTER_INCREMENT = "counter/increment";
const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return { counter: state.counter + action.payload };
    case "counter/decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
const store = redux.createStore(counterReducer);
/*
{
    todos: {},
    counter: {},
    filters: {}
}
*/

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: COUNTER_INCREMENT,
  payload: 2,
});
store.dispatch({
  type: COUNTER_INCREMENT,
  payload: 2,
});
store.dispatch({
  type: COUNTER_INCREMENT,
  payload: 2,
});
store.dispatch({
  type: "counter/decrement",
});
store.dispatch({
  type: COUNTER_INCREMENT,
  payload: 10,
});
