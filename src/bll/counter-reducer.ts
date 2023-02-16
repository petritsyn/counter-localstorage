type InitialStateType = {
    value: number
}
type ActionsTypes = ReturnType<typeof incrementAC>

const initialState:InitialStateType = {
    value: 0
}

export function counterReducer(state: InitialStateType = initialState, action: ActionsTypes): InitialStateType {
    switch (action.type) {
        case "INCREMENT-VALUE": {
            return {
                value: state.value + 1
            }
        }
        default:
            return state
    }
}

export const incrementAC = () => ({type: 'INCREMENT-VALUE'})