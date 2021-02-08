import store from './store';

export let CreateNewCard = (title,subtitle,description) => {
            store.dispatch({
                type: "CARD_ADD", 
                payload:{ title : title, subtitle: subtitle , description : description }});
}

export let DeleteCard = (id) => {
        store.dispatch({
            type: "CARD_DELETED",
            payload: {id: id}
        });
}