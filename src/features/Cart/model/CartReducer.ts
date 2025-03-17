import {BookApp} from '@/app/appReducer.ts';

const initialState = {
    cart: {} as Record<number, BookApp>,
}

export type initialStateType = typeof initialState;

/*
const init state = {
    cart:{
    "1":{userId: 1, id: 1, title: 'sunt', body: 'quia et o', author: 'Sarah Connor', …},
    "2":{userId: 1, id: 2, title: 'qui est esse', body: 'esi nulla', author: 'Sarah Connor'}
}}
*/


const ADD_BOOK = 'ADD_BOOK'
const DELETE_BOOK = 'DELETE_BOOK'

export const cartReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state, cart: {
                    ...state.cart, [action.payload.id]: action.payload,
                },
            }
        case DELETE_BOOK:
            const updatedCart = { ...state.cart }
            delete updatedCart[action.payload];
            return {...state, cart: updatedCart};
        default:
            return state
    }
}


export const addBookAC = (book: BookApp) => {
    return {
        type: ADD_BOOK,
        payload: book
    } as const
}

export const deleteBookAC = (bookId: number) => {
    return {
        type: DELETE_BOOK,
        payload: bookId
    } as const
}


export type AddBook = ReturnType<typeof addBookAC>
export type DeleteBook = ReturnType<typeof deleteBookAC>
export type CartActions = AddBook | DeleteBook


