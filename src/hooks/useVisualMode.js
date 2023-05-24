import { useState } from "react";

function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (!replace) {
      return setHistory(prev => [...prev, newMode]);
    }
    return setHistory(prev => [...prev.slice(0, prev.length - 1), newMode]);
  };

  const back = () => {
    return history.length > 1 ? setHistory(prev => [...prev.slice(0, prev.length - 1)]) : history;
  };

  return { mode: history[history.length - 1], transition, back };
}

export default useVisualMode;