import store from "./store";
import { bugAdded } from "./actions";

store.dispatch(bugAdded('Bug 1'))

//updates anytime there are changes
// const unsubscribe = store.subscribe(() => {
//     console.log('store changed!', store.getState())
// })

// store.dispatch({
//     type: action.BUG_ADDED,
//     payload: {
//         description: 'Bug1'
//     }
// })


// store.dispatch({
//     type: action.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// })


console.log(store.getState())