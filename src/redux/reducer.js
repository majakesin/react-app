import * as types from "./types";

let idInitialCard = 0;
let idInitialUser = 0;

let initialState = {
  cards: [],
  users: [],
  error: null,
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CARD_ADDED:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            id: ++idInitialCard,
            ...action.payload,
          },
        ],
      };

    case types.CARD_DELETED:
      return {
        ...state,
        cards: state.cards.filter((item) => item.id !== action.payload.id),
      };

    case types.USER_CREATED:
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.payload.id ? ++idInitialUser : action.payload.id,
            ...action.payload,
          },
        ],
      };

    case types.GET_USER_REQUESTED:
      return { ...state, loading: true };

    case types.GET_USER_SUCCESS:
      return { ...state, loading: true, users: action.users };

    case types.GET_USER_FAILED:
      return { ...state, loading: false, error: action.massage };
    default:
      return state; // ako akcija nije pronadjena da nam vrati state :)
  }
}
export default reducer; //da mozemo koristiti u drugim fajlovima
