type InitialStateType = typeof initialState
export type ActionsTypes = ReturnType<typeof incrementAC>

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
        default:
            return state
    }
}

export const incrementAC = () => ({type: 'INCREMENT-VALUE'} as const);