import { createSelector } from "reselect";

export const GetCards = (state) => {
  return state.cards;
};

export const GetUsers = (state) => {
  return state.users;
};

export const cards = createSelector([GetCards], (getCards) => {
  return getCards;
});

export const users = createSelector([GetUsers], (getUsers) => {
  return getUsers;
});
