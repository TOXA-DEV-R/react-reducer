const reducer = (state, action) => {
  const { payload } = action;
  console.log(action)
  switch (action.tpye) {
    case "add":
      return [
        ...state,
        { id: Date.now(), name: payload.name, completed: false },
      ];
    case "toggle":
      console.log(state)
      return state.map((item) =>
        item.id === payload.id ? { ...item, completed: !item.completed } : item
      );
    case "delete":
      return state.map((item) => item.id !== payload.id);
    default:
      return state;
  }
};
export default reducer;
