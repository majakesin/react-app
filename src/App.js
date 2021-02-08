import "./App.css";
import React, { useEffect, useState } from "react";
import Card from "./components/card";
import store from "./redux/store";
import { User } from "./components/users";
import { useDispatch, useSelector } from "react-redux";
import CreateCardFormikExample from "./components/formik/createCardFormikExample";
import CreateCardYupExample from "./components/yup/createCardYupExample";
import { createSelector } from "reselect";
import { getUserRequest } from "./redux/actions";

function App() {
  /* verzija sa reselctom, vraca mi sve da je undifined :)
  const selfSelector = (state) => state;
  const cards = createSelector(
    [selfSelector],
    (selfSelector) => selfSelector.cards
  );
  const users = createSelector(
    [selfSelector],
    (selfSelector) => selfSelector.users
  );

  console.log("cards" + cards);
  console.log(users); */

  const [cards, setCards] = useState(store.getState().cards);

  store.subscribe(() => {
    setCards(store.getState().cards);
  });
  const users = useSelector((state) => state.users);

  useEffect(getUserRequest(useDispatch(), users));

  return (
    <div>
      <div className="justify-content-center column" style={{ margin: "10px" }}>
        <div className="justify content-center row">
          <CreateCardFormikExample></CreateCardFormikExample>
          <CreateCardYupExample></CreateCardYupExample>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.cards.map((element) => (
              <Card props={element} key={element.id}></Card>
            ))}
        </div>
        <div className="column">
          {users.length > 0 &&
            users.map((user) => <User user={user} key={user.id}></User>)}
        </div>
      </div>
    </div>
  );
}
export default App;
