import { ACTION } from './constants';
import { Book, Order, AppActions, SimpleAction } from '../types';

export const addToCartAction = (book: Book): AppActions => {
    return {
        type: ACTION.ADD_TO_CART,
        book
    };
}

export const clearCartAction = (): SimpleAction => {
    return {
        type: ACTION.CLEAR_CART
    };
}

export const addToOrdersAction = (orders: Order[]): AppActions => {
    return {
        type: ACTION.ADD_TO_ORDERS,
        orders
    }
};


export const loadBooksAction = (): SimpleAction => {
    return {
        type: ACTION.LOAD_BOOKS
    };
}