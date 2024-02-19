import { createStore } from "redux";

const initialteState = {
  useAuth: false,
  currentTheme: "dark",
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialteState, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else if (action.type == "show") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return {
    ...state,
  };
};

const store = createStore(counterReducer);

export default store;
