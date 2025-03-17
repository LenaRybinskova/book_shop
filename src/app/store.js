"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var appReducer_1 = require("@/app/appReducer");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        app: appReducer_1.appReducer,
    }
});
/*export type AppRootActions =

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppRootActions>*/
/*export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector*/
// @ts-ignore
window.store = exports.store;
