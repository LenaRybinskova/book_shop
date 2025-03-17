const initialState = {
    cart: [] ,
}

export type initialStateType = typeof initialState;

const ADD_BOOK = 'ADD_BOOK'
const DELETE_BOOK = 'DELETE_BOOK'

export const cartReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state}
        default:
            return state
    }
}


export const addBookAC = (book: any) => {
    return {
        type: ADD_BOOK,
        payload: book
    } as const
}

export const deleteBookAC = (book: any) => {
    return {
        type: DELETE_BOOK,
        payload: book
    } as const
}


export type AddBook = ReturnType<typeof addBookAC>
export type DeleteBook = ReturnType<typeof deleteBookAC>
export type CartActions = AddBook | DeleteBook

/*export const fetchBooksData = () => async (dispatch: any) => {
    dispatch(setAppStatusAC('loading'))
    return authApi.getBooks()
        .then(data => {
            dispatch(setBookAC(data))
            dispatch(setAppStatusAC('succeeded'))
        })
        .catch(() => {
                dispatch(setAppStatusAC('failed'))
                throw new Error('Failed to fetch info')
            }
        )
}*/
