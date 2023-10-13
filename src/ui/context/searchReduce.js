
export const searchReduce = ( state = {} , action ) => {
    
    return {
        ...state,
        heroSearch: action.payload
    }
}
