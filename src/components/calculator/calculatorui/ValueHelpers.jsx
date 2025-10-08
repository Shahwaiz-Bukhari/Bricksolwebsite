export const incrementValue = (state, setState, key) => {
    setState((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };
  
  export const decrementValue = (state, setState, key, min) => {
    setState((prev) => ({
      ...prev,
      [key]: Math.max(prev[key] - 1, min),
    }));
  };