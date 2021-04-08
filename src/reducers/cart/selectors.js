import NameSpace from "../name-space";

export const getItems = (state) => state[NameSpace.CART].items;

export const getTotal = (state) => state[NameSpace.CART].total;

export const getCountCartItem = (state, book) => {
    return state.items.find(item => item.id === book.id).count;
}

export const getUpdatedCartItems = (state, book, quantity) => {

    const cartBookIndex = state.items.findIndex(item => item.id === book.id);
    const cartBook = state.items[cartBookIndex];
    const isDeleteItem = cartBook && ((cartBook.count + quantity) === 0);
    let newItems = [...state.items];
    let newItem;

    if (cartBook) {
        newItem = {...cartBook, count: cartBook.count + quantity, total: cartBook.total + quantity * book.price};
        newItems.splice(cartBookIndex, 1, newItem);
    } else {
        newItem = {id: book.id, name: book.title, count: 1, total: book.price};
        newItems.push(newItem);
    }

    if (isDeleteItem) {
        newItems.splice(cartBookIndex, 1);
    }

    return newItems;
}
