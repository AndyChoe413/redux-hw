import * as action from './actionTypes'

// export function bugAdded(description) {
//     return {
//         type: action.BUG_ADDED,
//         payload: {
//             description: 'Bug1'
//         }
//     }
// }

export const bugAdded = description => ({
     type: action.BUG_ADDED,
        payload: {
            description: 'Bug1'
        }
})