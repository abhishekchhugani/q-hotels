//Here we create and export our actions.

import axios from "axios";

export const GET_HOTELS = "GET_HOTELS";

export const getHotels = (hotels) => ({
  type: GET_HOTELS,
  payload: hotels,
});

export function getHotelsData() {
  return async (dispatch) => {
    axios.get("../../data.json").then((res) => {
      const hotels = res.data.results;
      dispatch(getHotels(hotels));
    });
  };
}
