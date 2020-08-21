import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {
        ...state,
        restaurants: [
          ...state.restaurants,
          { text: action.payload, id: cuid() },
        ],
      };
    case "REMOVE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        ),
      };

    case "CHANGE_NAME":
      const restaurant = state.restaurants.find(
        (restaurant) => restaurant.id === action.payload
      );
      restaurant.text = "The Crusty Crab";
      return { ...state, restaurants: [...state.restaurants] };

    default:
      return state;
  }
}
