import "./App.css";
<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import store from "./redux/store";
import Card from "./components/card";
import { User } from "./components/users";
import { useDispatch, useSelector } from "react-redux";
import CreateCardFormikExample from './components/formik/createCardFormikExample';
import CreateCardYupExample from './components/yup/createCardYupExample'

function App() {
=======
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./components/card";
import { User } from "./components/users";
import { cards, users } from "./redux/selectors";
import { GetUserRequest } from "./redux/actions";
import FormikYupExample from "./components/formikAndYup/FormikCardForm";

function App(props) {
>>>>>>> Stashed changes
  const dispatch = useDispatch();

  const cards = props.cards;
  const users = props.users;

  useEffect(() => {
    dispatch(GetUserRequest(users));
  });
<<<<<<< Updated upstream
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch({ type: "GET_USER_REQUESTED", payload: users });
  });
=======
>>>>>>> Stashed changes

  return (
    <div>
      <div className="justify-content-center column" style={{ margin: "10px" }}>
        <div className="justify content-center row">
          <FormikYupExample></FormikYupExample>
        </div>
        <div className="row">
<<<<<<< Updated upstream
          {cards.map((element) => (
            <Card props={element} key={element.id}></Card>
          ))}
=======
          {cards.length > 0 &&
            cards.map((element) => (
              <Card props={element} key={element.id}></Card>
            ))}
>>>>>>> Stashed changes
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
