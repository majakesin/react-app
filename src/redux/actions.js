import store from "./store";
import * as types from "./types";

export let CreateNewCard = (title, subtitle, description) => {
  store.dispatch({
    type: types.CARD_ADDED,
    payload: { title: title, subtitle: subtitle, description: description },
  });
};

export let DeleteCard = (id) => {
  store.dispatch({
    type: types.CARD_DELETED,
    payload: { id: id },
  });
};

export function GetUserRequest(users) {
  return { type: types.GET_USER_REQUESTED, payload: users };
}
