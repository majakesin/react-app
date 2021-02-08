import  { useState } from 'react';
import {CreateNewCard} from '../redux/actions'
import 'bootstrap/dist/css/bootstrap.css';

function CreateCard() {

    const [title , setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [description, setDescription] = useState("");

    function handleChange(event) {
        const {name, value} = event.target;
        if(name === "title") {
            setTitle(value);
        }
        else if(name === "subtitle") {
            setSubtitle(value);
        }
        else if(name === "description") {
            setDescription(value);
        }
        console.log(title,subtitle,description);
    }

    return (
    <table>
    <tbody>
        <tr><td><input type="text" name="title" className="form-control" value={title} placeholder="Title" onChange = {handleChange}></input></td></tr>
        <tr><td><input type="text" name="subtitle" className="form-control" value={subtitle} onChange={handleChange}></input></td></tr>
        <tr><td><input type="text" name="description" className="form-control" value={description} onChange={handleChange}></input></td></tr>
        <tr><td><button className="button btn-danger" onClick={()=> { CreateNewCard(title,subtitle,description)}}>Dodaj text</button></td></tr>
        </tbody>
        </table>
    );
} export default CreateCard;