
let idInitialCard = 0;
let idInitialUser = 0;

let initialState = {
    cards: [],
    users: [],
    error: null,
    loading: false
}

function reducer(state = initialState, action) {

    switch(action.type){
            
        case "CARD_ADD": 
        
            return {...state, cards:[...state.cards, { id: ++idInitialCard , 
                title: action.payload.title ,
                subtitle: action.payload.subtitle,
                description: action.payload.description}]};
        
        case "CARD_DELETED": 
            return {
                ...state, cards: state.cards.filter((item) => item.id!== action.payload.id)
        
            };
        
       
        case "USER_CREATED":
            return {
                ...state , users: [...state.users , {
                    id: action.payload.id ? ++idInitialUser : action.payload.id,
                    name: action.payload.name,
                    username: action.payload.username,
                    email: action.payload.email,
                    phone: action.payload.phone
                }]
            }
        
        case "GET_USER_REQUESTED":
            return {...state, loading:true}
        
        case "GET_USER_SUCCESS":
            return {...state, loading:true, users: action.users,}

        case "GET_USER_FAILED":
            return {...state, loading:false, error: action.massage}
        default: 
            return state; // ako akcija nije pronadjena da nam vrati state :)
        

    }
} export default reducer; //da mozemo koristiti u drugim fajlovima 