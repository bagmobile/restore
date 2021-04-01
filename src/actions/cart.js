import {CartType} from "./types";

const addToCart = (id) => {
    return {
        type: CartType.ADD,
        payload: id
    }
}

const increaseCartItem  = (id) => {
    return {
        type: CartType.INCREASE,
        payload: id
    }
}

const decreaseCartItem = (id) => {
    return {
        type: CartType.DECREASE,
        payload: id
    }
}

const deleteCartItem = (id) => {
    return {
        type: CartType.DELETE,
        payload: id
    }
}

export {
    addToCart,
    increaseCartItem,
    decreaseCartItem,
    deleteCartItem
}