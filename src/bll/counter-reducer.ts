type InitialStateType = typeof initialState
type ActionsTypes = ReturnType<typeof incrementAC> | ReturnType<typeof setValueFromLocalStoreageAC>

const initialState = {
    value: 0
}

export function counterReducer(state: InitialStateType = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case "INCREMENT-VALUE": {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "SET-VALUE-FROM-LOCAL-STORAGE": {
            return {
                ...state,
                value: action.value
            }
        }
        default:
            return state
    }
}

export const incrementAC = () => ({type: 'INCREMENT-VALUE'} as const);
export const setValueFromLocalStoreageAC = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const);