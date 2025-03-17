import {Book} from '@/app/booksAPI.types.ts';
import {authApi} from '@/app/booksAPI.ts';
import {getRandomAuthor} from '@/common/utils/getRandomAuthor.ts';
import {getRandomPrice} from '@/common/utils/getRandomPrice.ts';


export type BookApp = Book & {
    author: string;
    price: number;
};
export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState = {
    books: [] as BookApp[],
    status: 'idle',
}

export type initialStateType = typeof initialState;

const SET_BOOK = 'SET_BOOK'
const SET_APP_STATUS = 'SET_APP_STATUS'

export const appReducer = (state: initialStateType = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_BOOK:
            return {
                ...state,
                books: action.payload.map((book: Book) => ({
                    ...book,
                    author: getRandomAuthor(),
                    price: getRandomPrice()
                }))
            }
        default:
            return state
    }
}
export const setBookAC = (data: Book[]) => {
    return {
        type: SET_BOOK,
        payload: data
    } as const
}

export const setAppStatusAC = (status: RequestStatus) => {
    return {
        type: SET_APP_STATUS,
        payload: status
    } as const
}

export type SetBook = ReturnType<typeof setBookAC>
export type SetAppStatus = ReturnType<typeof setAppStatusAC>
export type AppActions = SetBook | SetAppStatus


/*export const getAboutUsInfo = () => (dispatch: any) => {

}*/


export const fetchBooksData = () => async (dispatch: any) => {
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
}


/*
export const logoutTC = (token: string) => async (dispatch: Dispatch<AuthActions>) => {
    return authApi.logout(token)
        .then(() => {
            dispatch(resetAllDataAC())
        })
        .catch(() => {
            throw new Error("Failed to fetch info")
        })
}*/
