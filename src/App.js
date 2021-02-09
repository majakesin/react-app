import "./App.css";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./components/card";
import { User } from "./components/users";
import { cards, users } from "./redux/selectors";
import { GetUserRequest } from "./redux/actions";
import FormikYupExample from "./components/formikAndYup/FormikCardForm";

function App(props) {
  const dispatch = useDispatch();

  const cards = props.cards;
  const users = props.users;

  useEffect(() => {
    dispatch(GetUserRequest(users));
  });

  return (
    <div>
      <div className="justify-content-center column" style={{ margin: "10px" }}>
        <div className="justify content-center row">
          <FormikYupExample></FormikYupExample>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((element) => (
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
const mapStateToProps = (state) => {
  return {
    cards: cards(state),
    users: users(state),
  };
};

export default connect(mapStateToProps)(App);
