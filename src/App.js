import "./App.css";
import React, { useReducer, useState } from "react";

const TYPES = {
  ADD_ONE: "ADD_ONE",
  SUBTRACT_ONE: "SUBTRACT_ONE",
  MULTIPLY_BY_TWO: "MULTIPLY_BY_TWO",
  RESET: "RESET",
  ADD_CUSTOM: "ADD_CUSTOM",
};

function App() {
  const [num, updateNum] = useState(0);

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case TYPES.ADD_ONE:
        return state + 1;
      case TYPES.SUBTRACT_ONE:
        return state - 1;
      case TYPES.ADD_CUSTOM:
        return state + action.value;
      case TYPES.RESET:
        return 0;
      default:
        return state;
    }
  }, 0);

  const addOne = () => dispatch({ type: TYPES.ADD_ONE });
  const subtractOne = () => dispatch({ type: TYPES.SUBTRACT_ONE });

  const reset = () => dispatch({ type: TYPES.RESET });
  const addCustom = () => dispatch({ type: TYPES.ADD_CUSTOM, value: num });

  const handleInputChange = (e) => updateNum(+e.target.value);

  return (
    <div className="App">
      <div className="result">{state}</div>

      <div className="button--group">
        <button onClick={addOne}> Add 1 </button>
        <button onClick={subtractOne}> Subtract 1 </button>
      </div>

      <div className="input--group">
        <input type="text" value={num} onChange={handleInputChange} />
      </div>

      <div className="button--group">
        <button onClick={addCustom}> Add num from input </button>
        <button onClick={reset}> Reset </button>
      </div>
    </div>
  );
}

export default App;
