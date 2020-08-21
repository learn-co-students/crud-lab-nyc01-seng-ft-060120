export const addRestaurant = (text) => {
  return {
    type: "ADD_RESTAURANT",
    payload: text,
  };
};
export const removeRestaurant = (id) => {
  return {
    type: "REMOVE_RESTAURANT",
    payload: id,
  };
};

export const changeName = (id) => {
  return {
    type: "CHANGE_NAME",
    payload: id,
  };
};
