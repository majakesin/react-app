import store from "./store";
<<<<<<< Updated upstream
=======
import * as types from "./types";
>>>>>>> Stashed changes

export let CreateNewCard = (title, subtitle, description) => {
  store.dispatch({
    type: "CARD_ADD",
    payload: { title: title, subtitle: subtitle, description: description },
  });
};

export let DeleteCard = (id) => {
  store.dispatch({
    type: "CARD_DELETED",
    payload: { id: id },
  });
};
<<<<<<< Updated upstream
=======

export function GetUserRequest(users) {
  return { type: types.GET_USER_REQUESTED, payload: users };
}
>>>>>>> Stashed changes
