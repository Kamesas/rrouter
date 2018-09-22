const counter = (state = "0", action) => {
  switch (action.type) {
    case "COUNT_UP":
      return parseInt(state + 1);
    case "COUNT_DOWN":
      return parseInt(state - 1);
    default:
      return [...state];
  }
};

export default counter;
