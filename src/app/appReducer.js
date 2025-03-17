"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAboutUsInfo = exports.getBookAC = exports.appReducer = void 0;
var initialState = {
    book: {}
};
var GET_BOOK = "GET_BOOK";
var appReducer = function (state, action) {
    switch (action.type) {
        case GET_BOOK:
            return __assign(__assign({}, state), { aboutUs: action.payload });
        default:
            return state;
    }
};
exports.appReducer = appReducer;
var getBookAC = function (book) {
    return {
    /*type: GET_ABOUT_US_INFO,
    payload: aboutUs*/
    };
};
exports.getBookAC = getBookAC;
var getAboutUsInfo = function () { return function (dispatch) {
}; };
exports.getAboutUsInfo = getAboutUsInfo;
