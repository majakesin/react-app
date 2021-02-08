import './App.css';
import React , {useEffect, useState} from 'react';
import store from './redux/store';
import Card from './components/card';
import CreateCard from './components/createCard';
import {User} from './components/users'
import { useDispatch,useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const [cards, setCards] = useState(store.getState().cards);
 
  store.subscribe(()=> {
     setCards(store.getState().cards);
    
  });
  const users = useSelector(state => state.users)

     
  useEffect(() => {
      dispatch({ type: 'GET_USER_REQUESTED',payload: users})
  })

  return (
    <div >
   <div className="justify-content-center column" style={{margin: "10px"}}>
    <div className="justify content-center" style={{margin:"20px" }}>
    <CreateCard></CreateCard>
    </div>
     <div className="row">
      {cards.map(element => <Card props={element}  key={element.id}></Card>) }   
    </div>
    <div className="column">
      
    {users.length > 0 && users.map(user => <User user={user} key={user.id}></User>)} 
    </div>
    </div>
   </div>)
  }
export default App;
