const initialState = {
    book: {}
}

export type PublicState = { aboutUs: string }

const GET_BOOK = "GET_BOOK"


export const appReducer = (state: any, action: any): PublicState => {
    switch (action.type) {
        case GET_BOOK:
            return { ...state, aboutUs: action.payload }
        default:
            return state
    }
}
export const getBookAC = (book: any) => {
    return {
        /*type: GET_ABOUT_US_INFO,
        payload: aboutUs*/
    } as const
}

export type AppActions = ReturnType<typeof getBookAC>


export const getAboutUsInfo = () => (dispatch: any) => {

}