import React from "react";
import store from "./store";
import * as types from "./types";
import { useDispatch } from "react-redux";

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

export let getUserRequest = (dispatch, users) => {
  dispatch({ type: types.GET_USER_REQUESTED, payload: users });
};
